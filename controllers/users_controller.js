let { actionType } = require('../routes/utils')

class UsersController {

    constructor(usersRepository) {
        this._repo = usersRepository;
    }

    list() {
        let users = this._repo.all();

        return {
            action: actionType.RENDER,
            template: 'users/list',
            model: users
        }
    }

    new() {
        return {
            action: actionType.RENDER,
            template: 'users/create',
            model: {}
        }
    }

    create(req, res){
        let user = req.body;
        this._repo.add(user);

        return {
            action: actionType.REDIRECT,
            target: '/usuarios'
        }
    }


    edit(id, req, res) {

        let user = this._repo.findById(id);

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
    }

    update(id, req, res) {

        let userToUpdate = this._repo.findById(id);

        if (userToUpdate == null) {
            res.status(404);
            return {
                action: actionType.RENDER,
                template: 'failures/item-not-found',
                model: {}
            }
        }

        userToUpdate.nome = req.body.nome;
        userToUpdate.sobrenome = req.body.sobrenome;

        return {
            action: actionType.REDIRECT,
            target: '/usuarios'
        }

    }
}

module.exports = UsersController;