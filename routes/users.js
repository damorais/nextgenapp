const express = require('express');
const router = express.Router();

const users = require('../data/users');

router.get('/', (req, res) => { 
  res.render('users/list', { usuarios: users});
});


router.get('/create', (req, res) =>{
  res.render('users/create', {});
});

router.post('/', (req, res) => {
  users.push(req.body);
  res.redirect('/usuarios');
});

module.exports = router;