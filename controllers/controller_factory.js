let build = (controllerName) => {

  switch(controllerName) {
    case "UsuariosController":
      return require('./users_controller');
  }

}

module.exports = build