var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.query('SELECT * FROM users', [], (err, res) => {
    if (err) {
      return next(err)
    } else {
      res.send(res)
    }
  })
});

module.exports = router;
