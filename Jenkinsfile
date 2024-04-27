pipeline {
    agent {
        kubernetes {
            yaml """
            apiVersion: v1
            kind: Pod
            spec:
            containers:
            - name: node
                image: node:20-alpine
                command:
                - cat
                tty: true
            """
        }
    }
    stages {
        stage('Build') { 
            steps {
                container('node') {
                    echo 'JenkinsFile is running on Jenkins Server'
                    sh 'npm install' 
                    sh 'npm run build'
                }
            }
        }
    }
}