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
  async getAllRegisters(info) {
    return database[this.nameModel].findAll({
    where:{[Op.or]:[{name:{[Op.like]:'%'+info+'%' }},{id_game:info}]
  }
  });} 
}
module.exports = Game_GenreServices;
