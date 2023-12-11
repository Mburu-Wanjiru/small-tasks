// Define MongoDB schema and models (e.g., Bus, User, Booking)
const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busNumber: String,
  schedule: [String], // Array of departure times
  stops: [String],
  // Other relevant fields
});

const userSchema = new mongoose.Schema({
  name: String,
  contactInformation: String,
  // Other relevant fields
});

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  busId: mongoose.Types.ObjectId,
  departureTime: String,
  arrivalTime: String,
  // Other relevant fields
});

const Bus = mongoose.model('Bus', busSchema);
const User = mongoose.model('User', userSchema);
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Bus, User, Booking };
