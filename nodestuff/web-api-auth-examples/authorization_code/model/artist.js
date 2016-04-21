'use strict';

var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
  followers: Number,
  genres: [String],
  id: String,
  name: String,
  popularity: Number
});


var model = mongoose.model('Artist',artistSchema);


module.exports = model;
