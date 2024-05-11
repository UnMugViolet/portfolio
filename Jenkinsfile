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
                // Publish the build artifacts to the server
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
        always {
            script {
                env.BUILD_STATUS = currentBuild.currentResult
                def changeSet = currentBuild.changeSets
                def emails = changeSet.collect { it.authorEmail }
                echo "Emails: ${emails.join(', ')}"
            }
            emailext mimeType: 'text/html',
                    body: """<div style="background-color: black; color: white; padding: 10px; display: inline-block; vertical-align: middle;">
                                <img src="https://jenkins.rocketegg.systems/static/66ba1066/images/svgs/logo.svg" alt="Jenkins logo" width: 29px; height: 40px;"/>
                                <h2 style="display: inline-block; ">${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} - ${env.BUILD_STATUS}:</h2>
                            </div>
                            <p>The build was ${env.BUILD_STATUS}. Check the <a href="${env.BUILD_URL}console">Jenkins logs</a> for details.</p>
                            <p>Check <a href="${env.BUILD_URL}">console output</a> to view the results.</p>
                            """,
                    subject: "[${env.JOB_NAME}] Build # ${env.BUILD_NUMBER} ${env.BUILD_STATUS}",
                    recipientProviders: [[$class: 'CulpritsRecipientProvider'], [$class: 'DevelopersRecipientProvider']],
                    to: "${env.SYS_ADMIN_EMAIL}"
        }
}