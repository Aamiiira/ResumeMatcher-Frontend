pipeline {
  agent any
  tools{
    nodejs 'nodejs'
    dockerTool 'docker'
  }
      stages{
        stage('init'){
            steps{
                script {
                   echo "Connected to github successfully"
                }
            }
        }

         stage('Install node modules'){
            steps{
                script{
                  echo "Installing node modules and building..."
                  sh 'npm install'
                  sh 'npm run build --prod'
                }

            }
         }
       
         stage('build image'){
             steps{
                script{
                    echo "Building image"
                      withCredentials([usernamePassword(credentialsId: 'DockerHub-Credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                      sh 'docker build -t amirazaghab/resumematcherfrontend:2.0 .'
                      sh 'echo $PASS | docker login -u $USER --password-stdin'
                      sh 'docker push amirazaghab/resumematcherfrontend:2.0' }
            }
        }
         }
         
           stage('deploy'){
              steps{
                script{
                    echo "Deploying the application..."
                }
            }
         }

      }
  }
