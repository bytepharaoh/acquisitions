# 🚀 Scalable Production-Ready API
### High-Load Backend & DevOps Practice Project

This repository contains a **production-ready backend API** designed to simulate real-world, high-load systems and modern development workflows.

The project focuses on **building, testing, containerizing, and deploying scalable APIs**, following industry-grade backend and DevOps practices used in real products.

---

## ✨ Overview

This project demonstrates how a backend service evolves from source code into a **secure, containerized, and automated production system**.

Key goals:
- Design a clean, scalable API architecture
- Apply security, validation, and authentication best practices
- Automate testing, CI/CD, and Docker image delivery
- Understand how real backend products are built and shipped

---

## ⚙️ Tech Stack

### 🟦 Backend
- **Node.js / Express** — REST API development
- **Drizzle ORM** — Type-safe SQL queries
- **PostgreSQL (Neon)** — Production-grade database
- **Zod** — Runtime schema validation

### 🔐 Security
- **JWT Authentication**
- **Role-based access control (RBAC)**
- **Arcjet** — Rate limiting & bot protection

### 🛠 Infrastructure & DevOps
- **Docker & Docker Compose** — Containerized environments
- **GitHub Actions** — CI/CD automation
- **Multi-platform Docker builds (Buildx)**
- **Automated image publishing**

### 🧪 Testing & Quality
- **Jest & SuperTest**
- Automated test execution & coverage reports
- ESLint & Prettier enforcement

---

## 🔋 Features

### API Capabilities
- User authentication (signup / signin / signout)
- JWT-based authorization
- Admin & user roles
- Business listings management
- Deal lifecycle management (create / accept / reject)
- Request validation using Zod
- Health check endpoint
- Structured logging with Winston

### DevOps & Automation
- CI pipelines for linting, testing, and builds
- Automated Docker image creation & publishing
- Clear workflow separation:
  - `lint-and-format.yml`
  - `tests.yml`
  - `docker-build-and-push.yml`

---

## 🧱 Project Structure

```text
src/
 ├── config/
 ├── controllers/
 ├── db/
 ├── middleware/
 ├── routes/
 ├── schemas/
 ├── services/
 └── utils/

### ▶️ Running Locally
```
Install dependencies
```

ذذ``npm install

Environment variables

Create a .env file:

PORT=3000
NODE_ENV=development
LOG_LEVEL=info
DATABASE_URL=
ARCJET_KEY=

Development mode
npm run dev


Server runs at:

http://localhost:3000

🐳 Docker
Build production image
docker build -t scalable-api .

Run container
docker run -p 3000:3000 scalable-api

Development environment
docker compose up --build
