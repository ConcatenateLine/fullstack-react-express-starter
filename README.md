# fullstack-react-express-starter

A minimal full-stack template using React for the frontend, Express.js for the backend, and Docker for containerized development and deployment.

---

## 🔧 Technologies

- ⚛️ React (frontend)
- 🚀 Express.js (backend)
- 🐳 Docker & Docker Compose
- 📄 Environment-based config (`.env.development` & `.env.production`)

---

## ⚙️ Setup

```bash
# Clone the repo
git clone https://github.com/your-username/fullstack-react-express-starter
cd fullstack-react-express-starter

# Run in development
docker-compose up --build

# Run in production
docker-compose -f docker-compose.prod.yml up --build

# Frontend/Backend Communication
React talks to Express via Docker's internal network:

```js   

fetch('http://server:5000/api'); // 'server' matches docker-compose service name

```
# 📁 Project Structure
client/       # React app
server/       # Express API
docker-compose.yml
docker-compose.prod.yml
README.md

# 🧪 .env Examples
client/.env.development
```

REACT_APP_API_URL=http://server:5000/api

```
client/.env.production
```

REACT_APP_API_URL=https://yourdomain.com/api

```
# 📌 Features
Hot reload during development
Environment-specific config
Clear separation of frontend and backend
Easily extendable with MongoDB, Auth, or custom modules

# 🚀 Future Enhancements
GitHub Actions pipeline
Receipt generation module
Printer integration for POS apps
Persistent session state with Docker volumes

# 📝 License
MIT — do what you want, just don’t forget to give credit.

