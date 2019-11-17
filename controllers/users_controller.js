
const { actionType } = require('../routes/utils')

let deps = {}

let using = (dependencies) => {
  deps = dependencies;
  return usersController;
}

let usersController = {

  list: async () => {
    let users = await deps.repository.all();
  
    return {
        action: actionType.RENDER,
        template: 'users/list',
        model: users
    }
  },
  
  new: () => {
    return {
        action: actionType.RENDER,
        template: 'users/create',
        model: {}
    }
  },
  
  create: async (req, res) => {
    let user = req.body;
    await deps.repository.add(user);
  
    return {
        action: actionType.REDIRECT,
        target: '/usuarios'
    }
  },
  
  edit: async (id, req, res) => {
  
    let user = await deps.repository.findById(id);
  
    if (user == null) {
        res.status(404);
        return {
            action: actionType.RENDER,
            template: 'failures/item-not-found',
            model: {}
        }
    }
  
    return {
        action: actionType.RENDER,
        template: 'users/edit',
        model: user
    }
  },
  
  update: async (id, req, res) => {
  
    let userToUpdate = await deps.repository.findById(id);
  
    if (userToUpdate == null) {
        res.status(404);
        return {
            action: actionType.RENDER,
            template: 'failures/item-not-found',
            model: {}
        }
    }
  
    await deps.repository.update(
        id, 
        {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome
        }
    );
  
    return {
        action: actionType.REDIRECT,
        target: '/usuarios'
    }
  },
  
  delete: async (id) => {
    let userToDelete = await deps.repository.findById(id);
  
    if (userToDelete == null) {
        res.status(404);
        return {
            action: actionType.RENDER,
            template: 'failures/item-not-found',
            model: {}
        }
    }
  
    await deps.repository.delete(id);
  
    return {
        action: actionType.REDIRECT,
        target: '/usuarios'
    }
  }
}

module.exports = { using, usersController }