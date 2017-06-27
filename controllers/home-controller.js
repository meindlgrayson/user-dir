const express = require('express');
const router = express.Router();

const data = require('../models/data.js');

router.get('/', function(req, res){
  res.render('index', data);
});
module.exports = router;