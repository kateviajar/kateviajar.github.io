var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Welcome to My Portfolio',
    name: 'Pao-Hua Chien' });
});

module.exports = router;
