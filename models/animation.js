
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Studio = require('./studio');

//create a schema for disney movies
var AnimationSchema = new Schema({
  title: String,
  studio: String,
  poster: String,
  releaseDate: String,
});

//create the Animation model from the schema
var Animation = mongoose.model('Animation', AnimationSchema);

//export Animation from this module
module.exports = Animation;
