const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class Game_GenreServices extends Services {
  constructor(){
    super('Game_Genre');
  }
  async createRegister(info) {    
    return database[this.nameModel].create(info);
  }
  
}
module.exports = Game_GenreServices;
