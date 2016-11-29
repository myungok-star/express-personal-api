
//require mongoose
var mongoose = require("mongoose");
//connects to a personal-api-app database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personal-api");

//import and export my Animation model
module.exports.Animation = require("./animation.js");
module.exports.Studio = require("./studio.js");
