const Services = require('./Services.js');
const database = require('../models');

class GameImageServices extends Services {
  constructor(){
    super('GameImage');
  }

  async createRegister(newGameImage) {
    return database[this.nameModel].create(newGameImage);

  }

  async getRegister(GameImage.id_game) {
    return database[this.nameModel].findOne({ where: { id_game: id_game }});
  }

}

module.exports = GameImageServices;
