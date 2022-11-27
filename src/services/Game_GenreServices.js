const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class Game_GenreServices extends Services {
  constructor(){
    super('Game_Genre');
  }

  async createRegister(NewGameGenre) {
    return database[this.nameModel].create(NewGameGenre); 
  } 

 /* async createRegister(NewGame) {
    return database[this.nameModel].create(NewGame, {
      include: [{
        association: Game.Genre,
        include: [ Genre.Game ]
      }]
    }); 
  } */

}
module.exports = Game_GenreServices;
