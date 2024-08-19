# KubeTask

## Project Overview

![Kubernetes To-Do App Architecture](/kubernetes-todo-app.jpeg)


This project is a microservices-based To-Do application deployed on Kubernetes. It consists of the following services:
- Frontend: A React application for the user interface.
- API Gateway: A Node.js application that routes requests to the appropriate backend services.
- To-Do Service: A Python Flask application that manages to-do items.
- User Service: A Python Flask application that manages user data.
- MySQL: A database service for persistent storage.

## Project Structure

kubernetes-todo-app/
├── frontend/
│ ├── Dockerfile
│ └── ... (frontend code)
├── api-gateway/
│ ├── Dockerfile
│ └── ... (api gateway code)
├── todo-service/
│ ├── Dockerfile
│ └── requirements.txt
│ └── app.py
├── user-service/
│ ├── Dockerfile
│ └── requirements.txt
│ └── app.py
├── k8s/
│ ├── frontend-deployment.yaml
│ ├── api-gateway-deployment.yaml
│ ├── todo-service-deployment.yaml
│ ├── user-service-deployment.yaml
│ └── mysql-deployment.yaml
└── README.md


## Setup Instructions

### Prerequisites

- Docker
- Kubernetes
- kubectl
- Minikube (for local testing)

### Steps

1. **Build Docker Images**:

docker build -t your-dockerhub-username/frontend:latest ./frontend
docker build -t your-dockerhub-username/api-gateway:latest ./api-gateway
docker build -t your-dockerhub-username/todo-service:latest ./todo-service
docker build -t your-dockerhub-username/user-service:latest ./user-service

2. Push Docker Images to Docker Hub:

docker push your-dockerhub-username/frontend:latest
docker push your-dockerhub-username/api-gateway:latest
docker push your-dockerhub-username/todo-service:latest
docker push your-dockerhub-username/user-service:latest

3. Deploy to Kubernetes:

kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/api-gateway-deployment.yaml
kubectl apply -f k8s/todo-service-deployment.yaml
kubectl apply -f k8s/user-service-deployment.yaml
kubectl apply -f k8s/mysql-deployment.yaml

4. Access the Application:

Use the NodePort services to access the frontend and API gateway from your local machine. The exact ports will depend on your Kubernetes setup.

##Conclusion

This project demonstrates a scalable and fault-tolerant microservices architecture using Kubernetes. Each service can be independently scaled and managed, providing a robust solution for modern application development.
