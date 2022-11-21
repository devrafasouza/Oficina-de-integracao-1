const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class GameImageServices extends Services {
  constructor(){
    super('GameImage');
  }

  async createRegister(newGameImage) {
    return database[this.nameModel].create(newGameImage);
  }

  async updateRegister(gameImage.id_game) {
    return database[this.nameModel].update(gameImage.id_game,{
      where: { id_game: id_game
      }});
  }

  async deleteRegister(gameImage.id_game) {
    return database[this.nameModel].destroy(gameImage.id_game,{
     where: { id_game: id_game
  }});
}
}
module.exports = GameImageServices;
