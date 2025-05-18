const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const dbRegisterRoutes = require('./db_register'); // Gestion des routes pour signup
app.use('/register', dbRegisterRoutes); // Toutes les requêtes sur /register iront dans db_register.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)
);

const db = require('./db'); // Add this if not already there

app.get('/games', (req, res) => {
  db.query('SELECT * FROM Game', (err, results) => {
    if (err) {
      console.error('Error fetching games:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});