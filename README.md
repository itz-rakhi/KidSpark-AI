# 🚀 KidSpark AI – AI & Robotics Learning Platform for Kids

KidSpark AI is a modern full-stack web application designed to introduce children to Artificial Intelligence, Robotics, Coding, and Future Technologies through interactive workshops and personalized learning experiences.

The platform provides a responsive landing page for workshop enrollment along with a comprehensive student dashboard that allows learners to track progress, view assessments, monitor attendance, showcase projects, access mentor feedback, and download certificates.

---

## 🌐 Live Demo

### Frontend
https://kid-spark-ai.vercel.app

### Backend API
https://kid-spark-ai-9wg5.vercel.app

### GitHub Repository
https://github.com/itz-rakhi/KidSpark-AI

---

# 📌 Features

## Public Website

* Modern responsive landing page
* Workshop information and curriculum
* Learning outcomes section
* Frequently Asked Questions (FAQ)
* Student enrollment form
* Mobile-friendly design
* Smooth animations using Framer Motion

## Student Dashboard

* Dashboard Overview
* Progress Tracker
* Assessments Module
* Attendance Reports
* Student Projects Showcase
* Mentor Feedback Section
* Certificate Management
* Notifications Center

## Backend Features

* REST API architecture
* Form submission handling
* Server-side validation
* MongoDB database integration
* CORS configuration
* Error handling middleware
* Health check endpoint

---

# 🏗️ System Architecture

Student/Parent
│
▼
React + Vite Frontend
│
▼
Express.js REST API
│
▼
MongoDB Database

---

# 📂 Project Structure

project-internshala/

├── frontend/

│   ├── src/

│   │   ├── components/

│   │   ├── dashboard/

│   │   │   ├── components/

│   │   │   └── pages/

│   │   ├── pages/

│   │   ├── services/

│   │   └── App.tsx

│   └── public/

│

└── backend/

```
├── config/

├── controllers/

├── middleware/

├── models/

├── routes/

├── server.js

└── vercel.json
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Framer Motion
* Recharts

## Backend

* Node.js
* Express.js
* CORS
* dotenv
* express-validator

## Database

* MongoDB Atlas
* Mongoose

## Deployment

* Vercel (Frontend)
* Vercel Serverless Functions (Backend)

---

# ⚙️ Installation & Setup

## Clone Repository
git clone https://github.com/itz-rakhi/KidSpark-AI.git
cd KidSpark-AI

---

## Backend Setup
cd backend

Install dependencies:
npm install

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173

Run backend:
node server.js

Backend runs on:
http://localhost:5000

---

## Frontend Setup
cd frontend

Install dependencies:
npm install

Create .env file:
VITE_API_URL=http://localhost:5000/api

Start frontend:
npm run dev

Frontend runs on:
http://localhost:5173

---

# 📡 API Endpoints

## Health Check

GET /api/health

Response:

{
"status": "ok"
}

---

## Register Student

POST /api/enquiry

Request:

{
"name": "Rakhi Samant",
"email": "[example@gmail.com](mailto:example@gmail.com)",
"phone": "9876543210"
}

Success Response:

{
"success": true,
"message": "Registration submitted successfully!"
}

---

# 🔒 Security Features

* Input validation using express-validator
* Email validation
* Phone number validation
* CORS protection
* Environment variable configuration
* Error handling middleware

---

# 📈 Future Enhancements

* User Authentication & Login
* Parent Dashboard
* AI Chatbot Assistant
* Course Management System
* Online Assessments
* Payment Gateway Integration
* Student Performance Analytics
* Certificate Verification
* Mobile Application

---

# 🚀 Deployment

Frontend deployed using Vercel:
https://kid-spark-ai.vercel.app

Backend deployed using Vercel Serverless Functions:
https://kid-spark-ai-9wg5.vercel.app

---

# 👩‍💻 Developer

Rakhi Avadut Samant
Computer Engineering Student | Mumbai University

LinkedIn:
https://www.linkedin.com/in/rakhi-samant-0bb067346

Email:
[rrakhis412005@gmail.com](mailto:rrakhis412005@gmail.com)

---

# 📜 License
This project is developed for educational and portfolio purposes.
