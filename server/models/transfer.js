const mongoose = require('mongoose');


const transferSchema = new mongoose.Schema({
    transferedOn: {
        type: Date,
        default: Date.now(),
    },
    targetLocation: String,
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;