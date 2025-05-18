require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('./db'); // Connexion à MySQL, fichier séparé

const secretKey = process.env.JWT_SECRET;

// Login route
router.post('/', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ success: false, message: 'Email and password are required' });
  }

  const sql = 'SELECT * FROM User WHERE Email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send({ success: false });
    }

    if (results.length === 0) {
      return res.status(401).send({ success: false, message: 'Invalid email or password' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return res.status(401).send({ success: false, message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      secretKey,
      { expiresIn: '2h' }
    );

    res.send({ success: true, token });
  });
});

module.exports = router;