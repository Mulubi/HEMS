// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   // additional fields for user information
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;


import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    role: {
        type: String,
        enum:[
            "admin",
            "user",
            "superadmin",
        ],
        default: "user"
    },
},
{
    timestamps: true,
}
);

const User = mongoose.model('User', UserSchema);

export default User;