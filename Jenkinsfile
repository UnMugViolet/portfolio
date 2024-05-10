pipeline {
    agent any
    tools {
        nodejs 'Main NodeJS'
    }
    stages {
        stage('SCM') {
            steps {
                git url: 'https://github.com/UnMugViolet/portfolio.git', branch: 'main'
            }
        }
        stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('Sonar-Server') {
                    // Specify full path of 'sonar-scanner' executable
                    sh '/bitnami/jenkins/home/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarScanner/bin/sonar-scanner'
                }
            }
        }
        // Wait for the SonarQube analysis to be completed by getting the webhook response
        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm run build'
            }
        }
        stage('Publish') {
            steps {
                // First step: publish 'dist/**' files
                ftpPublisher alwaysPublishFromMaster: false, 
                            continueOnError: false, 
                            failOnError: false, 
                            paramPublish: [parameterName:""], 
                            masterNodeName: '', 
                            publishers: [[
                                configName: 'mds-server-paul', 
                                transfers: [[
                                    asciiMode: false, 
                                    cleanRemote: true, 
                                    excludes: 'dist/node_modules/**', 
                                    flatten: false, 
                                    makeEmptyDirs: true, 
                                    noDefaultExcludes: false, 
                                    patternSeparator: '[, ]+', 
                                    remoteDirectory: '/', 
                                    remoteDirectorySDF: false, 
                                    removePrefix: 'dist', 
                                    sourceFiles: 'dist/**'
                                ]], 
                                usePromotionTimestamp: false, 
                                useWorkspaceInPromotion: false, 
                                verbose: false
                            ]]
            }
        }
    }
    post {
        success {
            emailext mimeType: 'text/html',
                    body: """<p>The build was successful. Check the Jenkins logs for details.</p>
                            <p>Build URL: ${env.BUILD_URL}</p>
                            <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins logo" />""",
                    subject: "[${env.JOB_NAME}] Build successful 🙌",
                    to: ${env.VITE_APP_ADMIN_EMAIL_ADDRESS}
        }
        failure {
            emailext mimeType: 'text/html',
                    body: """<p>The build failed. Check the Jenkins logs for details.</p>
                            <p>Build URL: ${env.BUILD_URL}</p>
                            <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins logo" />""",
                    subject: "[${env.JOB_NAME}] Build failed 💥",
                    to: ${env.VITE_APP_ADMIN_EMAIL_ADDRESS}
        }
        changed {
            emailext mimeType: 'text/html',
                    body: """<p>The build status changed. Check the Jenkins logs for details.</p>
                            <p>Build URL: ${env.BUILD_URL}</p>
                            <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins logo" />""",
                    subject: 'Build status is now passing 🌞',
                    to: ${env.VITE_APP_ADMIN_EMAIL_ADDRESS}
        }
    }
}