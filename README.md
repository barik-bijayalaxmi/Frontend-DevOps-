# Automated AWS DevOps Pipeline for Microservices 🚀
A cloud-native microservices deployment project built using containerization and CI/CD automation on AWS.The project demonstrates how to deploy a frontend application and backend microservices using automated pipelines, Docker containers, and Infrastructure as Code.

The system uses Terraform, Jenkins, and Docker for automated deployment.Frontend is hosted on Amazon S3 and distributed globally using Amazon CloudFront, while backend microservices run inside Amazon ECS with container images stored in Amazon Elastic Container Registry.

## 📦 Project Repositories

This project follows a microservices architecture, with each service maintained in its own repository.

1️⃣ Frontend Repository (Main Repository)
https://github.com/barik-bijayalaxmi/Frontend-DevOps-

2️⃣ User Service Repository
https://github.com/barik-bijayalaxmi/Backend-DevOps/tree/main/user-service

3️⃣ Order Service Repository
https://github.com/barik-bijayalaxmi/Backend-DevOps-order-/tree/main/order-service

## 🌍 Live Demo
Domains are configured using Amazon Route 53.
⚠️ Live demo is currently offline(https://frontend.theawsn.shop). AWS resources were removed to stop billing charges. Screenshots of the deployment are included as proof.

## Screenshots
All the screenshots are in this folder: 👉[Click here to view screenshots](Screenshots)

## ⚙️ Tech Stack
### CI/CD & DevOps
GitHub – Source code repository

Jenkins – CI/CD automation

Terraform – Infrastructure as Code

Docker – Containerization

Git Bash – Terraform execution

### AWS Services
Amazon ECS – Container orchestration

Amazon Elastic Container Registry – Docker image storage

Amazon S3 – Static frontend hosting

Amazon CloudFront – CDN delivery

Amazon Route 53 – Domain and DNS management

Amazon VPC – Networking

Application Load Balancer – Traffic routing

Amazon RDS – Managed MySQL database

### Database
MySQL Workbench – Database management and connection tool

## 🎯 Features

DevOps implementation includes:

Infrastructure provisioning using Terraform.
Automated CI/CD pipelines using Jenkins.
Docker container build and deployment.
Container image storage using Amazon ECR.
Microservices deployment using Amazon ECS.
Static frontend hosting using S3.
Global CDN delivery using CloudFront.
Custom domain configuration using Route53.
Secure networking with VPC and Security Groups.
Managed MySQL database using Amazon RDS.

## 📂 Project Architecture
```
                     Route53 (Domain)
                           │
        frontend.theawsn.shop      api.theawsn.shop
                           │
                      CloudFront
                           │
                         S3
                    (Frontend App)
                           │
                 Application Load Balancer
                           │
                      ECS Cluster
                   ┌───────────────┐
                   │               │
              User Service     Order Service
                   │               │
                   └────── Amazon RDS (MySQL)
```

## 🚀 Deployment Workflow
### 1️⃣ Infrastructure Provisioning
Infrastructure was created using Terraform executed through Git Bash.
Resources created:
- VPC
- Public subnets
- Security groups
- Application Load Balancer
- ECS cluster
- RDS MySQL database
### 2️⃣ Backend Deployment
Each microservice is containerized using Docker.
Deployment process:
- Jenkins pulls source code from GitHub
- Docker image is built
- Image pushed to Amazon ECR
- ECS service pulls the latest image
- Containers run behind Application Load Balancer
### 3️⃣ Frontend Deployment
Frontend deployment workflow:
- Jenkins pulls frontend code from GitHub
- Frontend build is generated
- Build files uploaded to Amazon S3
- CloudFront distributes the application globally
- Route53 maps the domain to CloudFront

## 📦 Production Commands
Terraform
```
terraform init
terraform plan
terraform apply
```
Docker
```
docker build -t user-service .
docker push <ECR-REPOSITORY>
```
ECS-
Update ECS service to deploy the latest container image.

## ⚠️ Project Status

AWS resources used in this project were deleted to prevent additional billing charges.
However, the repository still contains:
- Terraform infrastructure code
- Jenkins CI/CD configuration
- Docker container setup
- Application source code
- Deployment screenshots

This project demonstrates a complete DevOps deployment architecture using AWS microservices.

### 👩‍💻 Author
Bijayalaxmi Barik

GitHub
```
https://github.com/barik-bijayalaxmi
```
