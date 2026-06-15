#  AI Mock Interview Platform

> Ace Your Technical Interviews with AI-Powered Practice

An intelligent mock interview platform that helps students and job seekers prepare for technical interviews through realistic AI-driven interview simulations, coding assessments, voice interactions, and personalized feedback.

Live Demo :  https://ai-mock-interview-assistant-swart.vercel.app/

---

## 🌟 Features

### 🔐 Authentication & Security

* JWT-based User Authentication
* Secure Login & Registration
* Protected Routes

### 📄 Resume Analysis

* Upload Resume (PDF/DOCX)
* AI-Powered Resume Analysis
* Personalized Interview Questions

### 🤖 AI Interviewer (Natalie)

* Real-time AI Interview Sessions
* Dynamic Question Generation
* Personalized Follow-up Questions
* Role-Based Interviews

### 🎤 Voice Interview Support

* Speech-to-Text Conversion
* Text-to-Speech Responses
* Interactive Voice Conversations

### 💻 Coding Assessment

* Integrated Monaco Code Editor
* Real-time Coding Challenges
* AI-Based Code Evaluation
* Performance Scoring

### 📊 Performance Analytics

* Detailed Feedback Reports
* Communication Skill Analysis
* Technical Knowledge Assessment
* Coding Performance Evaluation
* Strengths & Improvement Areas

### 📚 Interview History

* Track Previous Interviews
* Review Past Performance
* Monitor Progress Over Time

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Monaco Editor
* React Hot Toast
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer

### AI Services

#### Google Gemini API

* Question Generation
* Code Evaluation
* Feedback Generation

#### AssemblyAI

* Speech-to-Text Processing

#### Murf AI

* Text-to-Speech Responses

---

## 🏗️ System Architecture

```text
User
 │
 ▼
React Frontend (Vite)
 │
 ▼
Express.js Backend
 │
 ├── MongoDB Atlas
 ├── Google Gemini API
 ├── AssemblyAI API
 └── Murf AI API
```


---

## 🚀 Deployment

| Service  | Platform      |
| -------- | ------------- |
| Frontend | Vercel        |
| Backend  | Render        |
| Database | MongoDB Atlas |

---

## 📂 Project Structure

```bash
AI-Mock-Interview/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── services/
│
└── README.md
```

---

## ⚡ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/AI-Mock-Interview.git
cd AI-Mock-Interview
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Configure Environment Variables

Create a `.env` file inside backend:

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

ASSEMBLYAI_API_KEY=your_assemblyai_api_key

MURF_API_KEY=your_murf_api_key
```

### Start Development Servers

Backend:

```bash
npm run dev
```

Frontend:

```bash
npm run dev
```

---

## 🎯 Key Learning Outcomes

* Full Stack MERN Development
* REST API Design
* JWT Authentication & Authorization
* MongoDB Database Management
* AI Integration with Gemini
* Speech Processing
* Cloud Deployment
* Responsive UI/UX Design
* Git & GitHub Workflow

---

## 🔮 Future Enhancements

* 🌍 Multi-Language Interview Support
* 🎥 Video-Based Interviews
* 👥 Collaborative Panel Interviews
* 📊 Advanced Analytics Dashboard
* 💼 LinkedIn Integration
* 📱 Mobile Application
* 🎬 Interview Recording & Playback
* 🏢 Company-Specific Interview Templates

---

## 👨‍💻 Author

**Riya Patil**

B.Tech Information Technology
Vishwakarma Institute of Technology, Pune

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub!

---

