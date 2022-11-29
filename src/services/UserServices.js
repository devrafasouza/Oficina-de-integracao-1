const Services = require('./Services.js');
const database = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

class UserServices extends Services {
  constructor(){
    super('User');
  }

  /* Metodos especificos de UserController */

  async createRegister(newUser) {
    return database[this.nameModel].create(newUser); /* cria um novo usuario no banco com o metodo create do sequelize */

  }

  async hashPassword(password) {
    return bcrypt.hash(password, 12); /* hash na password com bcrypt */
  }

  async compareHash(password, userValidPassword) {
    return bcrypt.compare(password, userValidPassword);

  }

  async createToken(userValidId) {
    return jsonwebtoken.sign({}, "5f4dcc3b5aa765d61d8327deb882cf99", {
      subject: String(userValidId.id_user),
      expiresIn: "1d"
  });

  }

  async loginUser(email) {
    return database[this.nameModel].findOne({ where: { email: email }})


  }

  async getRegister(column, data) {
    return database[this.nameModel].findOne({ where: { [column]: data }});
  }

  async updatedUser(userUpdated, id_user) {
    return database[this.nameModel]
      .update(userUpdated, { where: {id_user: id_user}}); /* atualiza as informações de um usuario com as novas informações */
  }


}

module.exports = UserServices;