pipeline {
    agent any
    stages {
        stage('requirements') {
            agent { docker { image 'node:14-alpine' } }
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
        stage('build') {
            steps {
              sh "docker build -t react-app-${GIT_BRANCH}:${BUILD_NUMBER} ."
              sh "docker run -d -p 3001:3001 react-app-${GIT_BRANCH}:${BUILD_NUMBER}"
            }
        }
    }
}
