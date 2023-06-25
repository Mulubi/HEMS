const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // additional fields for user information
});

const User = mongoose.model('User', userSchema);

module.exports = User;
