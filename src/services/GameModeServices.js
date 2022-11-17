const Services = require('./Services.js');
const database = require('../models');

class GameModeServices extends Services {
  constructor(){
    super('GameMode');
  }

  async createRegister(newGameMode) {
    return database[this.nameModel].create(newGameMode);

  }

  async getRegister(id_gamemode) {
    return database[this.nameModel].findOne({ where: { id_gamemode: id_gamemode }});
  }

}

module.exports = GameModeServices;
