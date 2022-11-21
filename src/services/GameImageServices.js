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

  async updateRegister(gameImage) {
    return database[this.nameModel].update(gameImage,{
      where: { id_game: gameImage.id_game
      }});
  }

  async deleteRegister(gameImage) {
    return database[this.nameModel].destroy({
     where: { id_game: gameImage
  }});
}
}
module.exports = GameImageServices;
