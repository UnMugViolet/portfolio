pipeline {
    agent any
    
    environment {
        NODE_ENV = 'production'
        DOCKER_REGISTRY = 'unmugviolet'
        DOCKER_BUILDKIT = '0'
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

        stage('Check Docker') {
            steps {
                sh 'docker --version'
                sh 'docker info'
            }
        }

        stage('Build Image') { 
            steps {
                script {
                    try {
                        // Check if Dockerfiles exist
                        sh 'ls -la backend/Dockerfile || echo "Backend Dockerfile not found"'
                        sh 'ls -la frontend/Dockerfile || echo "Frontend Dockerfile not found"'

                        def imageName = "${DOCKER_REGISTRY}/portfolio-xp:latest"
                        sh "docker compose build --no-cache"
                        env.IMAGE_NAME = imageName

                        echo "Docker image built successfully: ${env.IMAGE_NAME}"

                    } catch (Exception e) {
                        error "Failed to build Docker images: ${e.getMessage()}"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                script {
                    // Login to Docker Hub and push images
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        def imageName = docker.image("${env.IMAGE_NAME}")
                        imageName.push()
                        echo "Successfully pushed ${imageName} to Docker Hub"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: 'Infomaniak',
                            transfers: [
                                sshTransfer(
                                    execCommand: '''
                                        ~/websites/portfolioXP &&
                                        docker compose down &&
                                        docker compose pull &&
                                        docker compose up -d --build &&
                                        docker system prune -f &&
                                        docker image prune -f &&
                                        docker volume prune -f &&
                                        docker network prune -f
                                    '''
                                )
                            ]
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
