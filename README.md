# 🚀 Scalable Production-Ready API — DevOps Learning Project

This repository contains my DevOps practice project inspired by JavaScript Mastery’s “Build a Scalable Production Ready API” tutorial.

The goal of this project is to understand how real DevOps pipelines work — from writing backend code, to securing it, testing it, containerizing it, and automating deployment steps.  
I am still learning DevOps, and this project represents my current progress and practical experience.

---

## ✨ Introduction

This API is built using Node.js, Express, Drizzle ORM, and Neon Postgres.  
During this project, I learned how to:

- Build a scalable backend API  
- Use Docker for development and production  
- Set up CI/CD pipelines with GitHub Actions  
- Automate linting, formatting, and testing  
- Build and push production Docker images  
- Apply security and validation using Arcjet and Zod  

This project helped me understand the real workflow of DevOps in a simple, practical way.

---

## ⚙️ Tech Stack

### 🟦 Backend
- **Node.js** – JavaScript runtime  
- **Express.js** – API framework  
- **Drizzle ORM** – Type-safe SQL queries  
- **Neon Postgres** – Serverless PostgreSQL  
- **Zod** – Runtime schema validation  

### 🔐 Security
- **Arcjet** – Security layer for rate limiting & bot protection  
- **JWT Authentication**  

### 🛠 DevOps (Beginner-Friendly)
- **Docker** – Containerization  
- **Docker Compose** – Development environment  
- **GitHub Actions** – CI/CD automation  
- **Buildx** – Multi-platform Docker builds  

### 🧪 Testing
- **Jest**  
- **SuperTest**  
- Coverage reports uploaded through CI  

---

## 🔋 Features

### API Features
- User signup / signin / signout  
- JWT authentication  
- Role-based access control (admin/user)  
- Business listings (create, update, delete, browse)  
- Deal management (create, accept, reject)  
- Request data validation using Zod  
- System health check endpoint  
- Structured logging with Winston  
- Absolute imports using `#` alias  

### DevOps Features
- ESLint & Prettier code quality enforcement  
- Automated tests & coverage on every push  
- Docker production image building  
- Automatic Docker Hub push through CI/CD  
- Clear workflow separation:
  - `lint-and-format.yml`
  - `tests.yml`
  - `docker-build-and-push.yml`

---
2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file:

# Server
PORT=3000
NODE_ENV=development
LOG_LEVEL=info

# Database
DATABASE_URL=

# Arcjet Security Key
ARCJET_KEY=


▶️ Running the Project Locally
Development Mode
npm run dev


Server will run at:

http://localhost:3000

Production Build
npm run build
npm start

🐳 Docker Usage
Build Production Image
docker build -t my-api .

Run Container
docker run -p 3000:3000 my-api

Development Environment (Docker Compose)
docker compose up --build

🧱 Project Structure
src/
 ├── config/
 ├── controllers/
 ├── db/
 ├── middleware/
 ├── routes/
 ├── schemas/
 ├── services/
 └── utils/

⚙️ CI/CD Workflows (GitHub Actions)

This project includes 3 workflows:

🟦 1. Lint & Format

Runs ESLint and Prettier checks on every push and pull request.

🟩 2. Tests

Runs Jest tests, checks coverage, and uploads results as artifacts.

🟧 3. Docker Build & Push

Builds a production-ready Docker image and pushes it to Docker Hub using:

Multi-platform Buildx

Metadata tagging

Cached layers

Workflows trigger on:

Push to main or staging

Pull requests

🚀 Notes

This project is part of my DevOps learning journey.
I am currently exploring:

More advanced CI/CD pipelines

Docker image optimization

API security

Backend architecture best practices

More updates will be added as I continue learning.

👨‍💻 Author

Ziad Mohamed 
DevOps & cybersecurity Learner
