const Services = require('./Services.js');
const database = require('../models');

class GameServices extends Services {
  constructor(){
    super('Game');
  }

  async createRegister(newGame) {
    return database[this.nameModel].create(newGame); 

  }
  
  async getRegister(id_game) {
    return database[this.nameModel].findOne({ where: { id_game: id_game }});
  }

}

module.exports = GameServices;