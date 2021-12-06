def remote = [:]
remote.name = "devops-ssh"
remote.host = "127.0.0.1"
remote.port = 3022
remote.user = "devops"
remote.password = "chalo123"
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
	  steps {
	    sshCommand remote: remote, command: "ls -lrt"
	  }
	}
    }
}
