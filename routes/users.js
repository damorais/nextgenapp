const express = require('express')
const router = express.Router()
const { handler } = require('./utils');

const build = require('../controllers/controller_factory');

let usersController = 
  build('UsuariosController')
  .using({ repository: require('../data/users_repository') });

router.get('/', async (req, res) => 
  handler(req, res, await usersController.list(req, res)))

router.get('/create', async (req, res) => 
  handler(req, res, usersController.new(req, res)))

router.get('/edit/:id', async (req, res) => 
  handler(req, res, await usersController.edit(req.params.id, req, res)))

router.post('/', async (req, res) => 
  handler(req, res, await usersController.create(req, res)))

router.post('/update/:id', async (req, res) => 
  handler(req, res, await usersController.update(req.params.id, req, res)))

router.get('/delete/:id', async (req, res) =>
  handler(req, res, await usersController.delete(req.params.id, req, res)))

module.exports = router