pipeline {
    agent any
    stages {
        stage('requirements') {
            agent {
              docker {
                image 'node:14-alpine' 
                args '-u root:root'
              } 
            }
            steps {
                sh 'npm install --cache=".YourCustomCacheDirectoryName"'
                sh 'npm run test -- -u'
            }
        }
        stage('build') {
            steps {
              sh "docker ps -f name=react-app-app -q | xargs --no-run-if-empty docker container stop"
              sh "docker container ls -a -f name=react-app-app -q | xargs -r docker container rm"
              sh "docker build -t react-app-${GIT_BRANCH}:${BUILD_NUMBER} ."
              sh "docker run -d -p 80:80 --name=react-app-app react-app-${GIT_BRANCH}:${BUILD_NUMBER}"
            }
        }
    }
}
