'use strict';

var express = require('express');
var Artist = require('./model/artist');

var router = express.Router();


router.get('/artists', function(req, res){
  Artist.find({}, function(err, artists){
    if(err){
      return res.status(500).json({mseeage: err.message});
    }
    res.json({artists: artists});
  });
});
