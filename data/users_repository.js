const ObjectID = require('mongodb').ObjectID;

const database = require('../data/database');

let usersRepo = {

    all: async () => {
        let usuarios = await database.getCollection('usuarios');
        return await usuarios.find().toArray();
    },

    add: async (new_user) => {
        let usuarios = await database.getCollection('usuarios');
        return await usuarios.insert(new_user);
    },

    findById: async (user_id) => {
        let usuarios = await database.getCollection('usuarios');
        return await usuarios.findOne({ _id: new ObjectID(user_id) });
    },

    update: async (user_id, user_to_modify) => {
        let usuarios = await database.getCollection('usuarios');
        return await usuarios.findOneAndUpdate({ _id: new ObjectID(user_id) }, {
            $set: { 
                nome: user_to_modify.nome,
                sobrenome: user_to_modify.sobrenome
            }
        });
    },

    delete: async(user_id) => {
        let usuarios = await database.getCollection('usuarios');
        return await usuarios.findOneAndDelete({ _id: new ObjectID(user_id) });        
    }

};

module.exports = usersRepo;