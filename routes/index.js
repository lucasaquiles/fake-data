var express = require('express');
var router = express.Router();


var list = require("../fake-data.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(list);
});

module.exports = router;
