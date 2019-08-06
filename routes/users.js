var express = require('express');
var router = express.Router();
var pg = require('./../utils/pg');

/* GET users listing. */
router.get('/', function(req, res, next) {
  pg.executar('select * from users', '', (ret) => {
    res.json(ret);
  })
});

module.exports = router;
