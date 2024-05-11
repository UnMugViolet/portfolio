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
            script {
                print "Email: ${env.VITE_APP_ADMIN_EMAIL_ADDRESS}, ${env.SYS_ADMIN_EMAIL}"
            }
            emailext mimeType: 'text/html',
                    body: """<div style="background-color: black; color: white; padding: 10px;">
                            <h2 style="display: inline-block; vertical-align: middle;">${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} - ${env.BUILD_STATUS}:</h2>
                            <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins logo" style="display: inline-block; vertical-align: middle; width: 50px; height: 50px;" />
                            <p>Check console output at <a href="${env.BUILD_URL}" style="color: white;">${env.BUILD_URL}</a> to view the results.</p>
                            <p>The build was successful. Check the Jenkins logs for details.</p>
                            </div>""",
                    subject: "[${env.JOB_NAME}] Build successful 🙌",
                    to: "${env.VITE_APP_ADMIN_EMAIL_ADDRESS},${env.SYS_ADMIN_EMAIL}"
        }
        failure {
            emailext mimeType: 'text/html',
                    body: """<div style="background-color: black; color: white; padding: 10px;">
                            <h2 style="display: inline-block; vertical-align: middle;">${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} - ${env.BUILD_STATUS}:</h2>
                            <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins logo" style="display: inline-block; vertical-align: middle; width: 50px; height: 50px;" />
                            <p>Check console output at <a href="${env.BUILD_URL}" style="color: white;">${env.BUILD_URL}</a> to view the results.</p>
                            <p>The build failed. Check the Jenkins logs for details.</p>
                            </div>""",
                    subject: "[${env.JOB_NAME}] Build failed 💥",
                    to: "${env.VITE_APP_ADMIN_EMAIL_ADDRESS},${env.SYS_ADMIN_EMAIL}"
        }
        changed {
            emailext mimeType: 'text/html',
                    body: """<div style="background-color: black; color: white; padding: 10px;">
                            <h2 style="display: inline-block; vertical-align: middle;">${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} - ${env.BUILD_STATUS}:</h2>
                            <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins logo" style="display: inline-block; vertical-align: middle; width: 50px; height: 50px;" />
                            <p>Check console output at <a href="${env.BUILD_URL}" style="color: white;">${env.BUILD_URL}</a> to view the results.</p>
                            <p>The build status changed. Check the Jenkins logs for details.</p>
                            </div>""",
                    subject: 'Build status is now passing 🌞',
                    to: "${env.VITE_APP_ADMIN_EMAIL_ADDRESS},${env.SYS_ADMIN_EMAIL}"
        }
    }
}