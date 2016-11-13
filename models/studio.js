var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StudioSchema = new Schema({
  name: String
});

var Studio = mongoose.model('Studio', StudioSchema);

module.exports = Studio;
