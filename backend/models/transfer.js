const mongoose = require('mongoose');


const transferSchema = new mongoose.Schema({
    targetLocation: String,
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;