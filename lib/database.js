'user strict';

require('dotenv').config();

var mongoose = require('mongoose');
var mongoURI = process.env.DB_URI;

var connection;
mongoose.connect(mongoURI, { useCreateIndex: true, useNewUrlParser: true });
connection = mongoose.connection;

console.log("DB connection state -> ",connection.readyState);

connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
});
connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
});

module.exports = connection;
