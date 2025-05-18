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
      res.status(201).json({ message: 'Rating added successfully' });
    } catch (err) {
      console.error('Rating failed:', err);
      res.status(500).json({ error: 'Failed to rate game' });
    }
  });

  // GET: Top 10 rated games
app.get('/api/top-games', (req, res) => {
    const query = 'SELECT * FROM View_TopRatedGames';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching top-rated games:', err);
        return res.status(500).json({ error: 'Database query failed' });
      }
      res.json(results);
    });
  });

  // Top 5 highest-rated games
app.get('/api/favorites', (req, res) => {
    const sql = `
      SELECT GameID, Name, Description, YearPublished, NbPlayers, AverageRating
      FROM Game
      WHERE AverageRating IS NOT NULL
      ORDER BY AverageRating DESC
      LIMIT 5
    `;
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error fetching favorite games:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json(results);
    });
  });
  

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)
);
