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
    }
    post {
        success {
            step([$class: 'FtpPublisherPlugin', 
                  alwaysPublishFromMaster: false, 
                  continueOnError: false, 
                  failOnError: false, 
                  publishers: [[
                      configName: 'MDS Paul', 
                      transfers: [[
                          asciiMode: false, 
                          cleanRemote: false, 
                          excludes: '', 
                          flatten: false, 
                          makeEmptyDirs: false, 
                          noDefaultExcludes: false, 
                          patternSeparator: '[, ]+', 
                          remoteDirectory: '/public_html/', 
                          removePrefix: 'dist', 
                          sourceFiles: 'dist/**'
                      ]], 
                      usePromotionTimestamp: false, 
                      useWorkspaceInPromotion: false, 
                      verbose: false
                  ]]
            ])
        }
    }
}