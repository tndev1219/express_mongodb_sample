var mongoose = require('mongoose');
var connection = require('../lib/database');

var newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model('news', newsSchema);