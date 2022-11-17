const Services = require('./Services.js');
const database = require('../models');

class GamePlataformServices extends Services {
  constructor(){
    super('GamePlataform');
  }

  async createRegister(newGamePlataform) {
    return database[this.nameModel].create(newGamePlataform);

  }

  async getRegister(id_plataform) {
    return database[this.nameModel].findOne({ where: { id_plataform: id_plataform }});
  }

}

module.exports = GamePlataformServices;
