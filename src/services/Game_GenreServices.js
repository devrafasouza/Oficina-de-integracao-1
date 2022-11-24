const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class Game_GenreServices extends Services {
  constructor(){
    super('Game_Genre');
  }

  async createRegister(newGame_Genre) {
    return database[this.nameModel].create(newGame_Genre);
  }
 
}
module.exports = Game_GenreServices;
