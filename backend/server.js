const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const dbRegisterRoutes = require('./db_register'); // Gestion des routes pour signup
app.use('/register', dbRegisterRoutes); // Toutes les requêtes sur /register iront dans db_register.js

app.get('/', (req, res) => {
    res.send('Server is up and running ✅');
  });

  const db = require('./db'); // make sure this connects to your MySQL DB

  app.get('/api/games', async (req, res) => {
    try {
      const [rows] = await db.promise().query('SELECT * FROM View_All_Games');
      res.json(rows);
    } catch (err) {
      console.error('Error fetching games from view:', err);
      res.status(500).send('Server error');
    }
  });

  app.post('/api/rate', async (req, res) => {
    const { userID, gameID, score } = req.body;
  
    try {
      await db.promise().query('CALL RateGame(?, ?, ?)', [userID, gameID, score]);
      res.status(201).json({ message: '✅ Rating added successfully' });
    } catch (err) {
      console.error('Rating failed:', err);
      res.status(500).json({ error: '❌ User already rated this game' });
    }
  });

  app.get("/api/toprated", (req, res) => {
  db.query("SELECT * FROM View_TopRatedGames LIMIT 5", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching top rated games");
    }
    res.json(results);
  });
});

app.get("/api/events", (req, res) => {
  db.query("SELECT * FROM View_AllEvents", (err, results) => {
    if (err) {
      console.error("Error fetching events:", err);
      return res.status(500).json({ message: "Failed to retrieve events" });
    }
    res.json(results);
  });
});

// server.js or routes/game.js
app.get('/api/games/:id', (req, res) => {
  const gameId = req.params.id;

  const sql = 'SELECT * FROM Game WHERE GameID = ?';
  db.query(sql, [gameId], (err, results) => {
    if (err) {
      console.error('Error fetching game:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results[0]);
    }
  });
});

app.post('/api/events', (req, res) => {
  const { EventDate, EventTime, Location, OrganizerID, UserID, GameID } = req.body;

  const sql = `
    INSERT INTO Event (EventDate, EventTime, Location, OrganizerID, UserID, GameID)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [EventDate, EventTime, Location, OrganizerID, UserID, GameID], (err, results) => {
    if (err) {
      console.error('Failed to insert event:', err);
      return res.status(500).json({ error: 'Failed to create event' });
    }
    res.status(201).json({ message: '✅ Event created successfully', eventId: results.insertId });
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)
);
