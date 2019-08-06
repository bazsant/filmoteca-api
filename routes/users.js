var express = require('express');
var router = express.Router();
var pg = require('./../utils/pg');

/* GET users listing. */
router.get('/', function (req, res, next) {
  pg.executar('select * from users', '', (err, ret) => {
    if (err) {
      res.send(err);
    } else {
      res.json(ret);
    }
  })
});

module.exports = router;
