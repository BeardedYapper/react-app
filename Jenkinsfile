def remote = [:]
remote.name = "devops-ssh"
remote.host = "192.168.3.9"
remote.user = "devops"
remote.password = "chalo123"
remote.allowAnyHosts = true

pipeline {
    agent {
      docker {
	image 'node:14-alpine' 
	args '-u root:root'
      } 
    }
    stages {
        stage('requirements') {
            steps {
                sh 'npm install --cache=".YourCustomCacheDirectoryName"'
                sh 'npm run test -- -u'
		sh 'npm run build'
            }
        }
	stage('remote ssh') {
	  steps {
	    sh 'ls'
	    sshCommand remote: remote, command: "echo 'hello jenkins lmao'"
	    sshCommand remote: remote, command: "rm -rf /var/www/build"
	    sshPut remote: remote, from: './build/', into: "/var/www/"
	    sshCommand remote: remote, command: "ngrok http 80 --log=stdout > ngrok.log &"
	  }
	}
    }
}
