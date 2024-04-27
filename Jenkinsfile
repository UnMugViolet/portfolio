pipeline {
    agent any
    tools {
        nodejs 'Main NodeJS'
        sonarQubeScanner 'SonarScanner'
    }
    stages {
        stage('SCM') {
            steps {
                checkout scm
            }
        }
        stage('SonarQube analysis') {
            steps {
                def scannerHome = tool 'SonarScanner'
                withSonarQubeEnv('Sonar-Server') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') { // Specify timeout
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Build') { 
            steps {
                echo 'JenkinsFile is running on Jenkins Server'
                sh 'npm install' 
                sh 'npm run build'
            }
        }
        stage('Publish') {
            steps {
                ftpPublisher alwaysPublishFromMaster: false, 
                             continueOnError: false, 
                             failOnError: false, 
                             paramPublish: [parameterName:""], 
                             masterNodeName: '', 
                             publishers: [[
                                 configName: 'mds-server-paul', 
                                 transfers: [[
                                     asciiMode: false, 
                                     cleanRemote: false, 
                                     excludes: 'dist/node_modules/**', 
                                     flatten: false, 
                                     makeEmptyDirs: true, 
                                     noDefaultExcludes: false, 
                                     patternSeparator: '[, ]+', 
                                     remoteDirectory: '/', 
                                     remoteDirectorySDF: false, 
                                     removePrefix: 'dist', 
                                     sourceFiles: 'dist/**,src/assets/img/**'
                                 ]], 
                                 usePromotionTimestamp: false, 
                                 useWorkspaceInPromotion: false, 
                                 verbose: false
                             ]]
            }
        }
    }
}