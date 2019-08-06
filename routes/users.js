var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.query('SELECT * FROM users', [], (err, ret) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.send(ret)
    }
  })
});

module.exports = router;
