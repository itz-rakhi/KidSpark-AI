# AI & Robotics Summer Workshop — Full-Stack Landing Page

A modern, responsive landing page for a kids' AI & Robotics summer workshop, built with **React + Vite + Tailwind CSS** (frontend) and **Express.js + MongoDB** (backend).

---

## Project Structure

```
project-internshala/
├── frontend/          # React + Vite + Tailwind CSS
│   └── src/
│       ├── components/   # Navbar, Hero, Details, Outcomes, FAQ, RegistrationForm, Footer
│       ├── pages/        # Home.jsx
│       └── services/     # api.js (Axios)
└── backend/           # Express.js + MongoDB
    ├── controllers/   # enquiryController.js
    ├── middleware/    # validate.js
    ├── models/        # Enquiry.js
    ├── routes/        # enquiry.js
    └── server.js
```

---

## Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas) — optional, server starts without it

---

### Backend Setup

```bash
cd backend
```

Create a `.env` file (already included):
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/workshop
FRONTEND_URL=http://localhost:5173
```

Start the server:
```bash
node server.js
# or with auto-reload:
node --watch server.js
```

Server runs at: `http://localhost:5000`

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App runs at: `http://localhost:5173`

---

## API Reference

### `POST /api/enquiry`

**Request Body:**
```json
{
  "name": "Arjun Sharma",
  "email": "arjun@email.com",
  "phone": "9876543210"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Registration submitted successfully"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Valid email is required"
}
```

---

## Features

- 🎨 Dark-themed modern UI with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Framer Motion animations throughout
- ✅ Client-side + server-side form validation
- 🔄 Loading, success, and error states on form
- 🪗 Accordion FAQ section
- 📦 MongoDB integration with Mongoose
- 🔒 CORS configured for security
- 🏷️ SEO meta tags in HTML

---

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS v4   |
| Animations| Framer Motion                     |
| HTTP      | Axios                             |
| Backend   | Express.js, CORS, dotenv          |
| Validation| express-validator                 |
| Database  | MongoDB + Mongoose                |

---

## MongoDB Atlas (Cloud)

Replace `MONGO_URI` in `backend/.env` with your Atlas connection string:
```
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/workshop
```
