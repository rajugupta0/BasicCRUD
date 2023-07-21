const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    }
}, { timestamps: true});

const User = mongoose.model('User',userSchema);
module.exports = User;