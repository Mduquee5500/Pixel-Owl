# 🦉 Pixel Owl Platform Game 

A classic arcade-style platformer game built with **React**, **Phaser 3**, and **Node.js**, featuring user authentication, a scoreboard system, and a modular frontend.

## 📸 Screenshots


- **Home Page (Login/Register)**
  
  ![Home Page](src/screenshots/login.png)

- **Game Play**

  ![Game](src/screenshots/play.png)

- **Scoreboard Page**

  ![Scoreboard](src/screenshots/scoreboard.png)

- **About Page**

  ![About](src/screenshots/about.png)

---

## 🚀 Features

- 🎮 Pixel-style **platformer game** using **Phaser 3**.
- 🔐 **User authentication** (login/register) with context-based session management.
- 🧾 **Scoreboard** that saves scores by user and date via a **Node.js/Express** backend.
- 📦 **Persistent storage** in JSON (acts as a simple database).
- 🌐 Fully responsive UI built with **React** and styled using **Tailwind CSS**.
- 📘 About section explaining tools and project scope.
  
---

## ⚙️ Technologies Used

### Frontend

- **React** (with hooks and functional components)
- **Phaser 3** (game engine)
- **Tailwind CSS** (utility-first styling)
- **React Router DOM** (for navigation)
- **React Context API** (authentication context)

### Backend

- **Node.js + Express**
- **JSON-based storage** for scores
- **CORS enabled** for local development

---

## 📁 Project Structure

```bash
my-game-app/
├── public/
├── src/
│   ├── assets/             # Game and UI images
│   ├── components/         # Reusable components
│   ├── context/            # Auth context logic
│   ├── pages/              # Home, Game, Scoreboard, About
│   ├── App.jsx             # Main router
│   └── main.jsx
├── server/                 # Node.js backend
│   ├── scores.json         # Score "database"
│   └── server.js
├── tailwind.config.js
├── README.md
└── package.json
