def remote = [:]
remote.host = "127.0.0.1"
remote.port = "3022"
remote.user = "devops"
remote.allowAnyHosts = true

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
	stage('remote ssh') {
	  sshCommand remote: remote, command: "ls -lrt"
	}
    }
}
