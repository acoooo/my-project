pipeline {
    agent any

    stages {
        stage('Download the latest code from GitHub') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/acoooo/my-project']]])
            }
        }
        
        stage('Build the Docker image'){
            steps{
                script {
                    dockerImage = docker.build "my-app:latest"
                }
            }
        }
        
        stage('Stop the previously run container'){
            steps{
                sh 'docker ps --filter name=my-app -q | xargs --no-run-if-empty docker container stop'
                sh 'docker ps -a --filter name=my-app -q | xargs --no-run-if-empty docker container rm'
            }
        }
        
        stage('Run the Docker image on this server'){
            steps{
                sh 'docker container run -d -p 3333:3000 --name=my-app my-app:latest'
            }
        }
    }
}
