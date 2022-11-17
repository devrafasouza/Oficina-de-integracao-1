const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class GameServices extends Services {
  constructor(){
    super('Game');
  }

  async createRegister(newGame) {
    return database[this.nameModel].create(newGame); 

  }  
  async getRegister(info) {
    return database[this.nameModel].findOne({ 
      where: {[Op.or]: [{id_game: info}, {name: info}]
      }});
  }

  async getRegisterName(name) {
    return database[this.nameModel].findAll({ 
      where: { name: name
      }});
  }
  async updateRegister(date,id_game) {
    return database[this.nameModel].update(date,{ 
      where: { id_game: id_game 
      }});
  } 

  async deleteRegister(id_game) {
    return database[this.nameModel].destroy({ 
      where: { id_game: id_game 
      }});
  }

  async getAllRegister(id_game) {
    return database[this.nameModel].findAll({ 
      where: { id_game: id_game 
      }});
  }

}

module.exports = GameServices;