const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  equipment: {
    type: mongoose.Schema.Types.ObjectId,
    //required: true,
  },
  startDate: {
    type: Date,
    //required: true,
  },
  endDate: {
    type: Date,
    //required: true,
  },
  description: {
    type: String,
    //required: true,
  },
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);

module.exports = Maintenance;
