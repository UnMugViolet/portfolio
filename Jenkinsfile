pipeline {
    agent any
    
    environment {
        NODE_ENV = 'production'
    }
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
                    sh "${tool 'SonarScanner'}/bin/sonar-scanner"
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
                sh 'npm install --include=dev'
                sh 'npm run build'
            }
        }
        stage('Publish') {
            steps {
                // Publish the build artifacts to the server using SSH
                sshPublisher(
                    continueOnError: false, 
                    failOnError: true, 
                    publishers: [
                        sshPublisherDesc(
                            configName: 'Hostinger',
                            transfers: [
                                sshTransfer(
                                    sourceFiles: 'dist/**', 
                                    remoteDirectory: '/domains/pauljaguin.com/public_html',
                                    removePrefix: 'dist', 
                                    cleanRemote: true, 
                                    makeEmptyDirs: true, 
                                    flatten: false, 
                                    noDefaultExcludes: false, 
                                    patternSeparator: '[, ]+' 
                                )
                            ],
                            usePromotionTimestamp: false,
                            verbose: true 
                        )
                    ]
                )
            }
        }
    }
    post {
        always {
            script {
                env.BUILD_STATUS = currentBuild.currentResult

                def previousCommit = env.GIT_PREVIOUS_SUCCESSFUL_COMMIT ?: 'HEAD^' // If null, use HEAD^ for the previous commit
                def currentCommit = env.GIT_COMMIT ?: 'HEAD'

                def commitHashes = sh(script: "git log --pretty=format:'%H' ${previousCommit}..${currentCommit}", returnStdout: true).trim().split("\n")
                def authorEmails = commitHashes.collect { hash ->
                    return sh(script: "git show -s --format='%ae' ${hash}", returnStdout: true).trim()
                }.unique().findAll { email ->
                    !email.matches(".*noreply.*")
                }

                // Remove the sysadmin email if present
                authorEmails.remove(env.SYS_ADMIN_EMAIL)
                env.AUTHOR_EMAILS = authorEmails.join(",")
                echo "Author Emails: ${env.AUTHOR_EMAILS}"
            }
            emailext (
                mimeType: 'text/html',
                subject: "[${env.JOB_NAME}] Build #${env.BUILD_NUMBER} - ${env.BUILD_STATUS}",
                body: """<div style="background-color: black; padding: 5px 20px; display: inline-block;">
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
                        <p>The build was ${env.BUILD_STATUS}. Check the <a href="${env.BUILD_URL}console">Console output</a> for details.</p>
                        <p>Check <a href="${env.BUILD_URL}">Jenkins build</a> to view the results.</p>""",
                recipientProviders: [[$class: 'CulpritsRecipientProvider'], [$class: 'DevelopersRecipientProvider']],
                to: "${env.AUTHOR_EMAILS}, ${env.SYS_ADMIN_EMAIL}"
            )
        }
    }
}
