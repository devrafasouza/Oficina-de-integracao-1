const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class GenreServices extends Services {
  constructor(){
    super('Game_Genre');
  }

  async createRegister(newGenre) {
    return database[this.nameModel].create(newGenre);
  }

  async updateRegister(info,id_genre) {
    return database[this.nameModel].update(info,{ 
      where: { id_genre: id_genre
      }});
  } 
  async getAllRegistersGenre(info) {
    return database[this.nameModel].findAll({
    where:{id_game:info.id_game
    }  });
  }
  
  async deleteRegister(id_genre) {
    return database[this.nameModel].destroy({ 
     where: { id_genre: id_genre 
  }});
}
}
module.exports = GenreServices;
