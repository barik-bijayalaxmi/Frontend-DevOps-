pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    environment {
        AWS_DEFAULT_REGION = 'us-east-1'
        S3_BUCKET = 'frontend-static-f31323b8'
        CLOUDFRONT_DISTRIBUTION_ID = 'E3P20DLYCTRQS'
    }

    stages {

        stage('Build Frontend') {
            steps {
                sh '''
                  node -v
                  npm -v
                  chmod +x build.sh
                  ./build.sh
                '''
            }
        }

        stage('Deploy to S3 & Invalidate CloudFront') {
            steps {
                withCredentials([[ 
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-credentials'
                ]]) {
                    sh '''
                      aws s3 sync build/ s3://$S3_BUCKET --delete
                      aws cloudfront create-invalidation \
                        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
                        --paths "/*"
                    '''
                }
            }
        }
    }
}

