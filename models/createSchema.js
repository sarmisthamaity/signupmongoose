const connection = require('../database/connection')
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cPassword: {
        type: String,
        required: true
    },
    dateofBirth: {
        type: String,
        required: true
    }
});


const usermodel = new mongoose.model('collections', userSchema);
module.exports = usermodel;
