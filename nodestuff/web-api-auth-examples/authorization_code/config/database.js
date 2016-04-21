'use strict';

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

mongoose.connect('mongodb://localhost/findmusician', function(err){
  if(err){
    console.log('Failed connecting database!');
  }else {
    console.log('Successfully connected to database!');
  }
});

var db = mongoose.connection;

var Schema = mongoose.Schema;

var artistSchema = new Schema({
  followers: Number,
  genres: [String],
  id: String,
  name: String,
  popularity: Number
});


var artist = mongoose.model('Artist', artistSchema);


router.post('/db', function(req, res, next) {

  aArtist = new artist(
      req.body
  );
  aArtist.save(function(err) {
    if (err) {res.send(err);}
    else {res.send ({message: 'it worked!'})}
  })
});


router.get('/db', function (req, res, next) {
  artist.find({}, function (err, results) {
    res.json(results);
  })

});

router.get('/db/:name', function (req, res, next) {
  artist.find({name: req.param('name')}, function (err, results) {
    res.json(results);
  });
});

module.exports = router;
