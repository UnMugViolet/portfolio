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
                def commitHashes = sh(script: "git log --pretty=format:'%H' ${env.GIT_PREVIOUS_SUCCESSFUL_COMMIT}..${env.GIT_COMMIT}", returnStdout: true).trim().split("\n")
                def authorEmails = commitHashes.collect { hash ->
                    return sh(script: "git show -s --format='%ae' ${hash}", returnStdout: true).trim()
                }.unique()
                authorEmails.remove(env.SYS_ADMIN_EMAIL)
                env.AUTHOR_EMAILS = authorEmails.join(",")
                echo "Author Emails: ${env.AUTHOR_EMAILS}"
            }
            emailext mimeType: 'text/html',
                    body: """<div style="background-color: black; padding: 0px 20px; display: inline-block;">
                                <table style="color: white; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 0;">
                                            <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins logo" style="width: 29px; height: 40px;"/>
                                        </td>
                                        <td style="padding-left: 0.5rem;">
                                            <h2 style="margin: 0;">${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} - ${env.BUILD_STATUS}</h2>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <p>The build was ${env.BUILD_STATUS}. Check the <a href="${env.BUILD_URL}console">Jenkins logs</a> for details.</p>
                            <p>Check <a href="${env.BUILD_URL}">console output</a> to view the results.</p>
                            """,
                    subject: "[${env.JOB_NAME}] Build # ${env.BUILD_NUMBER} ${env.BUILD_STATUS}",
                    recipientProviders: [[$class: 'CulpritsRecipientProvider'], [$class: 'DevelopersRecipientProvider']],
                    to: "${env.AUTHOR_EMAILS}, ${env.SYS_ADMIN_EMAIL}"
        }
    }
}