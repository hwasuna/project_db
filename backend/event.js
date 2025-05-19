const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', (req, res) => {
  const {
    address,
    city,
    postcode,
    organizerId,
    date,
    time,
    userId,
    eventName,
  } = req.body;

  if (!organizerId || !address || !city || !postcode || !date || !time || !userId || !eventName) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  const fullLocation = `${address}, ${postcode} ${city}`;
  const sql = 'CALL AddEvent(?, ?, ?, ?, ?, ?)';

  db.query(sql, [eventName, organizerId, date, time, fullLocation, userId], (err, result) => {
    if (err) {
      console.error('Stored procedure error:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
    res.json({ success: true, message: 'Event created via stored procedure!' });
  });
});

module.exports = router;
