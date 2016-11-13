
//require mongoose
var mongoose = require("mongoose");
//connects to a book-app database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personal-api");

//import and export my Animation model
module.exports.Animation = require("./animation.js");
