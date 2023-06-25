const mongoose = require('mongoose');


const maintenanceRequestSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    description: String,
    priority: { type: String, enum: ['Urgent', 'Not Urgent'], default: 'Urgent' }
});

const MaintenanceRequest= mongoose.model('MaintenanceRequest', maintenanceRequestSchema);

module.exports = MaintenanceRequest;