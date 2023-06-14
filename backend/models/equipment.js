const mongoose = require('mongoose');


const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true['Please provide name of equipment'],
        trim:true,
        maxlength: 100
    },
    make: String,
    model: String,
    serialNumber: String,
    location: String,
    status: { type: String, enum: ['Available', 'In Use', 'Under Maintenance'], default: 'Available' },
    assignedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;