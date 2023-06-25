const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Technician = mongoose.model('Technician', technicianSchema);

module.exports = Technician;
