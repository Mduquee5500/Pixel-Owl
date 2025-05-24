const { getUsers, saveUsers } = require("./users/userService")
const { v4: uuidv4 } = require("uuid");
const { getScores, saveScores } = require ('./scores/scoreServices')

const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors())
app.use(express.json());

app.get("/users", (req, res) => {
  const users = getUsers();
  res.json(users);
});

app.post("/users", (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }
  
  const users = getUsers();

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(409).json({ error: "Username already exists" });
  }

  const newUser = {
    id: uuidv4(),
    username,
    password,
  };

  users.push(newUser);
  saveUsers(users);

  res.status(201).json(newUser);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  const users = getUsers();

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  res.json({ message: "Login successful", user: { id: user.id, username: user.username } });
});

// GET top 5 scores ordenados desc por score
app.get('/scores', (req, res) => {
  const scores = getScores();
  const topScores = scores
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  res.json(topScores);
});

// POST new score
app.post('/score', (req, res) => {
  const { username, score } = req.body;

  if (!username || typeof score !== 'number') {
    return res.status(400).json({ error: 'Username and score are required.' });
  }

  const scores = getScores();
  const newScore = {
    username,
    score,
    date: new Date().toISOString()
  };

  scores.push(newScore);
  saveScores(scores);

  res.json({ success: true });
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

