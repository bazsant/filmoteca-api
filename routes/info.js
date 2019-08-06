var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function (req, res, next) {
    db.getClient((err, client, done) => {
        res.json({
            err: err,
            client: client,
            done: done
        })
    })
});

module.exports = router;
