const express = require('express')
const router = express.Router()
const { handler } = require('./utils');

//TODO: Ver como melhorar isso... Algum mecanismo de injeção de dependência?
const repo = require('../data/users_repository')
//TODO: Ver como melhorar isso... Algum mecanismo de injeção de dependência?
const UsersController = require('../controllers/users_controller')

let usersController = new UsersController(repo);

router.get('/', (req, res) => 
  handler(req, res, usersController.list(req, res)))

router.get('/create', (req, res) => 
  handler(req, res, usersController.new(req, res)))

router.get('/edit/:id', (req, res) => 
  handler(req, res, usersController.edit(parseInt(req.params.id), req, res)))

router.post('/', (req, res) => 
  handler(req, res, usersController.create(req, res)))

router.post('/update/:id', (req, res) => 
  handler(req, res, usersController.update(parseInt(req.params.id), req, res)))


module.exports = router