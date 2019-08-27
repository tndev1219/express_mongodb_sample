var mongoose = require('mongoose');
var connection = require('../lib/database');

var adminSchema = mongoose.Schema({
    tokenid: String,
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: String,
});

module.exports = mongoose.model('admin', adminSchema);