'use strict';

var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  Name: String,
  url: String,
  date_posted: [Date],
  summary: String,
  id: String
});


var model = mongoose.model('Blog',blogSchema);


module.exports = model;
