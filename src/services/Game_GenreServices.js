const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class Game_GenreServices extends Services {
  constructor(){
    super('Game_Genre');
  }
/*
  async createRegister(NewGameGenre) {
    console.log(NewGameGenre);
    return database[this.nameModel].create(NewGameGenre); 
  } 

 */ async createRegister(NewGame) {

  console.log(NewGame);
  resultado = database[this.nameModel].create(NewGame, {
    include: [{
      association: database.Genre,
      include: [ database.Game ]
    }]
  }); 

  console.log(resultado);
    return resultado;

}}
module.exports = Game_GenreServices;
