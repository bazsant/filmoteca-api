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

router.get('/create', function (req, res, next) {
  db.query(`CREATE TABLE users (
    id bigserial primary key,
    name varchar(40) NOT NULL,
    phone varchar(20) NOT NULL,
    gender varchar(1) NOT NULL,
  	email varchar(40) NOT NULL,
  	birth date NOT NULL
    );`, [], (err, ret) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.send(ret)
      }
    })
});

module.exports = router;
