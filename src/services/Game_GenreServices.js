const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class Game_GenreServices extends Services {
  constructor(){
    super('Game_Genre');
  }

  async createRegister(newGameGenre) {
    return database[this.nameModel].create(newGameGenre);
  }
}
module.exports = Game_GenreServices;
