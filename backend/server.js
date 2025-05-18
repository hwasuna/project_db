const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const dbRegisterRoutes = require('./db_register'); // Gestion des routes pour signup
app.use('/register', dbRegisterRoutes); // Toutes les requêtes sur /register iront dans db_register.js

const eventRoute = require('./event');
app.use('/event', eventRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ${PORT}')
);
