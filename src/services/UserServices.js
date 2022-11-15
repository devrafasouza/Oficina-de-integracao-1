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

  async hashPassword(newUser) {
    return bcrypt.hash(newUser.password, 12); /* hash na password com bcrypt */
  }

  async compareHash(password, userValidPassword) {
    return bcrypt.compare(password, userValidPassword);

  }

  async createToken(userValidId) {
    return jsonwebtoken.sign({}, "5f4dcc3b5aa765d61d8327deb882cf99", {
      subject: String(userValidId),
      expiresIn: "1d"
  });

  }

  async loginUser(email, password) {
    return database[this.nameModel].findOne({where: {email: email}})


  }


}

module.exports = UserServices;