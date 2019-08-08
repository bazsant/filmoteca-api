var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function (req, res, next) {
  db.query('SELECT * FROM users', [], (err, ret) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json(ret.rows)
    }
  })
});


router.post('/', function (req, res, next) {
  db.query('insert into users (name, phone, gender, email, birth) values ($1, $2, $3, $4, $5) RETURNING *',
    [
      req.body.name,
      req.body.phone,
      req.body.gender,
      req.body.email,
      req.body.birth,
    ]
    , (err, ret) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json(ret.rows)
      }
    })
});

router.put('/', function (req, res, next) {
  db.query('update users set name = $1, phone = $2, gender = $3, email = $4, birth = $5 where id = $6 RETURNING *',
    [
      req.body.name,
      req.body.phone,
      req.body.gender,
      req.body.email,
      req.body.birth,
      req.body.id,
    ]
    , (err, ret) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json(ret.rows)
      }
    })
});

router.delete('/:id', function (req, res, next) {
  db.query('delete from users where id = $1 RETURNING *',
    [
      req.params.id,
    ]
    , (err, ret) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json(ret.rows)
      }
    })
});

// router.get('/create', function (req, res, next) {
//   db.query(`CREATE TABLE users (
//     id bigserial primary key,
//     name varchar(40) NOT NULL,
//     phone varchar(20) NOT NULL,
//     gender varchar(1) NOT NULL,
//   	email varchar(40) NOT NULL,
//   	birth date NOT NULL
//     );`, [], (err, ret) => {
//       if (err) {
//         res.json({ error: err })
//       } else {
//         res.send(ret)
//       }
//     })
// });

module.exports = router;
