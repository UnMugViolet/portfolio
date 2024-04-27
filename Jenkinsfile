pipeline {
    agent any
    tools {
        nodejs 'Main NodeJS'
    }
    stages {
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
                                     sourceFiles: 'dist/**'
                                 ]], 
                                 usePromotionTimestamp: false, 
                                 useWorkspaceInPromotion: false, 
                                 verbose: false
                             ]]
            }
        }
    }
}