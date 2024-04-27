pipeline {
    agent {
        docker {
            image 'node:20-alpine'
        }
    }
    stages {
        stage('Build') { 
            steps {
                echo 'JenkinsFile is running on Jenkins Server'
                sh 'npm install' 
                sh 'npm run build'
            }
        }
    }
}