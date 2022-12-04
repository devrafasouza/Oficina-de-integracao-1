const Services = require('./Services.js');
const database = require('../models');

class GameServices extends Services {
  constructor(){
    super('Game');
  }

  async createRegister(newGame) {
    return database[this.nameModel].create(newGame); 

  }
  
  async getRegister(column, data) {
    return database[this.nameModel].findOne({ where: { [column]: data }});
  }

  async getAllRegisters(column, data) {
    return database[this.nameModel].findAll({ where: { [column]: data }});
  }

}

module.exports = GameServices;