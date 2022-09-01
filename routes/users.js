var express = require('express');
var router = express.Router();
var db = require('../lib/sequelize')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  var users = await db.User.findAll();
  res.render('users/index', { users });
});

/* GET a user */
router.get('/:id', async function (req, res, next) {
  var user = await db.User.findOne({ where: { id: req.params.id } });
  res.render('users/show', { user });
});

/* user creation form */
router.get('/regist', function (req, res, next) {
  res.render('users/regist', { csrfToken: req.csrfToken() });
});

/* Create a user */
router.post('/regist', function (req, res, next) {
  db.User.create({
    name: req.body.name
  }).then((data) => {
    res.redirect('/users');
  }).catch((err) => {

  });
});

module.exports = router;
