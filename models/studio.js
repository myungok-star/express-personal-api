var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudioSchema = new Schema({
  name: String,
  location: String
});

var Studio = mongoose.model('Studio', StudioSchema);

module.exports = Studio;
