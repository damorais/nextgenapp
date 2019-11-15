//TODO: Este repositório serve apenas para propósito de desenvolvimento. 

let users = [ ];
let lastId = 0;

let usersRepo = {

    all: () => {
        return users;
    },
    add: (user) => {
        lastId++;
        user.id = lastId;
        users.push(user);
    },

    findById: (id) => users.find(user => user.id === id)

};

module.exports = usersRepo;