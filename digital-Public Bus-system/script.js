// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up MongoDB connection
mongoose.connect('mongodb://localhost/busSystem', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB schema and models (e.g., Bus, User, Booking)

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes for handling bus tracking, booking, payment, notifications, and bus queue display

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


