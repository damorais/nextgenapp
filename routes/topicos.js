const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
  res.render('topicos/list');
});

router.get('/create', (req, res) => {
    res.render('topicos/create')
});

module.exports = router;