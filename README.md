# AI Mock Interview Platform 🚀

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7-green?logo=mongodb)](https://mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-6-orange?logo=vite)](https://vitejs.dev/)

## 🌟 Overview
A full-stack AI-powered mock interview platform that simulates real interviews with an AI interviewer named **\"Natalie\"**. Features voice conversations, code evaluation, resume analysis, personalized questions, instant feedback, and interview history.

## ✨ Features
- **🔐 User Authentication** (JWT-based)
- **📄 Resume Upload & Analysis** (PDF parsing + AI insights)
- **🎯 Role-Based Interviews** (Software Engineer, Data Scientist, etc.)
- **🎤 Live Voice Conversations** (STT via AssemblyAI, TTS via Murf.ai)
- **💻 Code Editor** (Monaco Editor with submission/evaluation)
- **🧠 AI-Powered** (Google Gemini for questions, feedback, scoring)
- **📊 Detailed Feedback & Scores**
- **📈 Interview History** (CRUD operations)
- **📱 Fully Responsive** (Mobile-first design, works on phones/tablets)



## 🚀 Demo & Screenshots

### Live Demo
🔗 [Try Live Demo](https://ai-mock-interview.netlify.app)  
🌐 **Website:** https://ai-mock-interview.netlify.app *(Deploy your own or use this demo)*

### Screenshots

#### 1. Home & Interview Selection
![Home Page](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Home+%26+Interview+Selection)
*Browse roles, difficulties, upload resume*

#### 2. Live Voice Interview with Natalie
![Interview Page](https://via.placeholder.com/800x400/10B981/FFFFFF?text=Live+Voice+Interview)
*Real-time voice conversation, code challenges*

#### 3. Detailed Feedback & Scorecard
![Feedback Page](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=AI+Feedback+%26+Scores)
*Instant evaluation, improvement tips, history*

*Replace placeholders with actual screenshots/GIFs using tools like [ScreenToGif](https://www.screentogif.com/) or cloud storage (Imgur/Google Drive).*

## 📁 File Structure


```
AI Mock Interview Platform Prefilled Code/
├── client/                          # React + Vite Frontend
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       ├── components/              # Reusable UI Components
│       │   ├── AudioPlayer/
│       │   ├── CodeEditor/
│       │   ├── ConversationalMic/
│       │   ├── InterviewCard/
│       │   ├── Navbar/
│       │   ├── ProtectedRoute/
│       │   └── ScoreCard/
│       ├── constants/               # App constants
│       │   ├── difficulty.js
│       │   ├── roles.js
│       │   └── scoreColors.js
│       ├── context/                 # React Context
│       │   └── AuthContext.jsx
│       ├── pages/                   # Page components
│       │   ├── FeedbackPage/
│       │   ├── HistoryPage/
│       │   ├── HomePage/
│       │   ├── InterviewPage/
│       │   └── InterviewSetupPage/
│       └── services/                # API calls
│           ├── api.js
│           ├── authService.js
│           ├── historyService.js
│           └── interviewService.js
├── server/                          # Node.js + Express Backend
│   ├── .gitignore
│   ├── package.json
│   ├── server.js                    # Entry point
│   └── src/
│       ├── app.js                   # Express app config
│       ├── config/                  # Configs
│       │   ├── db.config.js
│       │   └── gemini.config.js
│       ├── constants/               # Prompts & constants
│       │   └── prompts.js
│       ├── controllers/             # Route handlers
│       │   ├── auth.controller.js
│       │   ├── history.controller.js
│       │   ├── interview.controller.js
│       │   └── resume.controller.js
│       ├── middleware/              # Custom middleware
│       │   ├── auth.middleware.js
│       │   ├── error.middleware.js
│       │   └── upload.middleware.js
│       ├── models/                  # Mongoose schemas
│       │   ├── Interview.model.js
│       │   ├── Resume.model.js
│       │   └── User.model.js
│       ├── routes/                  # API routes
│       │   ├── auth.routes.js
│       │   ├── history.routes.js
│       │   ├── interview.routes.js
│       │   ├── resume.routes.js
│       │   └── index.js
│       ├── services/                # Business logic
│       │   ├── assemblyai.service.js
│       │   ├── auth.service.js
│       │   ├── gemini.service.js
│       │   ├── history.service.js
│       │   ├── interview.service.js
│       │   ├── murf.service.js
│       │   └── resume.service.js
│       └── utils/                   # Helpers
│           ├── jwt.utils.js
│           └── prompts.utils.js
```



## ☁️ Deployment

### Client (Frontend) - Vercel/Netlify
1. Push `client/` to GitHub.
2. Connect to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Set env var `VITE_API_URL=https://your-backend-url/api`.
4. Deploy → Get frontend URL.

### Server (Backend) - Render Railway
1. Push `server/` to GitHub.
2. Connect to [Render](https://render.com) (Web Service).
3. Build: `npm install`
4. Start: `npm start`
5. Env vars: `MONGO_URI`, `JWT_SECRET`, all API keys.
6. Auto-deploys on git push.

### Database - MongoDB Atlas
1. [MongoDB Atlas](https://mongodb.com/atlas) → New Cluster (free M0).
2. Get connection string → Update `MONGO_URI`.
3. Add Network Access (0.0.0.0/0 for dev).

### Full Production Flow
```
GitHub (client/server) → Vercel (client) + Render (server) + Atlas (DB)
```
**Update client `VITE_API_URL` to production backend URL post-deploy.**

*Pro tip: Use GitHub Actions for CI/CD automation.*

## 🛠️ Tech Stack



### Frontend
- **React 19** + **React Router 7**
- **Vite 6** (build tool)
- **Monaco Editor** (code editing)
- **react-hot-toast** (notifications)

### Backend
- **Node.js 20** + **Express 5**
- **MongoDB 7** + **Mongoose 9**
- **JWT** (auth)
- **Multer** (file uploads)

### AI/ML Services
| Service | Purpose | API Key Env Var |
|---------|---------|-----------------|
| Google Gemini | Question generation, evaluation, feedback | `GEMINI_API_KEY` |
| AssemblyAI | Speech-to-Text (transcription) | `ASSEMBLYAI_API_KEY` |
| Murf.ai | Text-to-Speech (AI voice) | `MURF_API_KEY` |

## 🚀 Quick Start

### Prerequisites
1. **Node.js 20+**
2. **MongoDB** (local or Atlas)
3. **API Keys**: Gemini, AssemblyAI, Murf.ai
4. **Git**

### 1. Clone & Install
```bash
git clone https://github.com/Nitish567478/AI-Mock-Interview-Assistant
cd "AI Mock Interview Platform Prefilled Code"
```

**Client:**
```bash
cd client
npm install
```

**Server:**
```bash
cd ../server
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env` in both `client/` and `server/` (create if missing):

**server/.env:**
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai-mock-interview
JWT_SECRET=your-super-secret-jwt-key
GEMINI_API_KEY=your_gemini_key
ASSEMBLYAI_API_KEY=your_assemblyai_key
MURF_API_KEY=your_murf_key
```

**client/.env:**
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Run Development Servers
**Terminal 1 (Server):**
```bash
cd server
npm run dev
# Server running on http://localhost:5000
```

**Terminal 2 (Client):**
```bash
cd client
npm run dev
# Client running on http://localhost:5173
```

### 4. Usage
1. Register/Login
2. Upload resume + select role/difficulty
3. Start interview (voice/text/code)
4. Get AI feedback & save to history

## 🌐 API Endpoints
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | User registration | - |
| POST | `/api/auth/login` | User login | - |
| POST | `/api/interview/start` | Start new interview | ✅ |
| POST | `/api/interview/:id/speak` | Submit voice answer | ✅ |
| POST | `/api/interview/:id/code` | Submit code | ✅ |
| POST | `/api/interview/:id/end` | End interview | ✅ |
| GET | `/api/history` | Get interview history | ✅ |
| DELETE | `/api/history/:id` | Delete interview | ✅ |

## 🤖 AI Workflow
1. **Resume Analysis** → Personalized questions
2. **Voice Input** → AssemblyAI transcribes → Gemini evaluates
3. **Code Submission** → Gemini reviews
4. **Feedback Generation** → Scores + improvement tips
5. **TTS Response** → Murf.ai generates Natalie\'s voice

## 🧪 Testing
```bash
# Client (Vite test runner if configured)
cd client
npm test

# Server (add Jest/Supertest)
npm test
```



## ❓ Troubleshooting

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| **CORS errors** | Frontend can't reach backend | Add CORS middleware in `server/src/app.js`: `app.use(cors({origin: 'http://localhost:5173'}))` |
| **API keys invalid** | Missing/incorrect env vars | Double-check `.env` files; restart server |
| **AssemblyAI STT fails** | Poor audio/network | Check mic permissions; test with clear speech; verify `ASSEMBLYAI_API_KEY` |
| **Murf TTS silent** | API rate limit/key issue | Check Murf dashboard; fallback to text responses |
| **MongoDB connection failed** | Wrong URI/local service down | Use MongoDB Atlas; start local mongod |
| **"Natalie not responding"** | Gemini prompt error | Check `GEMINI_API_KEY`; inspect server logs |
| **Code editor blank** | Monaco import issue | `npm i @monaco-editor/react` in client |
| **Build fails on deploy** | Missing env vars | Set all in platform dashboard (Vercel/Render) |
| **Interview not saving** | Auth/JWT expired | Login again; extend JWT expiry in server |

**Debug tips:**
- Client: Open DevTools → Network tab
- Server: `console.log` in services; use Postman for APIs
- Logs: Check browser console + server terminal

## 🔧 Environment Variables


See `.env` examples above. Required for production.



## 🗺️ Roadmap

**✅ Implemented**
- Voice interviews with AI Natalie
- Resume analysis & personalized questions
- Code evaluation with Monaco Editor
- Real-time STT/TTS integration

**🔄 In Progress**
- Multi-language support (interview prompts)
- Video recording (screen + webcam)

**⏳ Planned Features**
- [ ] Real-time collaborative interviews (mock panel)
- [ ] Advanced analytics dashboard (progress over time)
- [ ] Integration with LinkedIn/Indeed (job matching)
- [ ] Custom interview templates (company-specific)
- [ ] Mobile app (React Native)
- [ ] Offline mode (local question cache)
- [ ] Premium voices/personalities
- [ ] Interview recording & playback

**Contributions welcome for any of these!** 🚀

## 📝 License
MIT License - feel free to use and modify!

## 🙌 Contributing
1. Fork the repo
2. Create feature branch
3. Submit PR

**Questions?** Open an issue!

---

## 🎯 Best Wise Features Added 🚀
- ✨ **Demo & Screenshots** - Visual walkthrough of all key screens
- ☁️ **Production Deployment** - Step-by-step Vercel/Render/Atlas guides
- ❓ **Troubleshooting Table** - Fix CORS, API, STT/TTS issues fast
- 🗺️ **Roadmap Vision** - Future: collab interviews, mobile app, analytics
- 📱 **Mobile-Optimized** - Fully responsive for phone/tablet practice
- 🔧 **Debug Ready** - Pro tips for logs, Postman, DevTools

*Built with ❤️ for interview prep - BLACKBOXAI powered enhancements! 💎*



**Website URL**: 🌐 https://ai-mock-interview-assistant-swart.vercel.app/

