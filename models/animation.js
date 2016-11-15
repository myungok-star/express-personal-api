
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Studio = require('./studio');


var CharacterSchema = new Schema({
    name: String
  });

//create a schema for animation movies
var AnimationSchema = new Schema({
  title: String,
  studio: {
    type: Schema.Types.ObjectId,
    ref: 'Studio'
  },
  poster: String,
  releaseDate: String,
  characters: [CharacterSchema]
});

//create the Animation model from the schema
var Animation = mongoose.model('Animation', AnimationSchema);

//export Animation from this module
module.exports = Animation;
