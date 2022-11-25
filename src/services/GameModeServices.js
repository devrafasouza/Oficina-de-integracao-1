const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class GameModeServices extends Services {
  constructor(){
    super('GameMode');
  }

  async createRegister(newGameMode) {
    return database[this.nameModel].create(newGameMode);
  }

  async updateRegister(date,id_gamemode) {
    return database[this.nameModel].update(date,{
      where: { id_gamemode: id_gamemode
      }});
  }

  async deleteRegister(id_gamemode) {
    return database[this.nameModel].destroy({
     where: { id_gamemode: id_gamemode
  }});
}

async getRegister(info) {
  return database[this.nameModel].findOne({
    where: {[Op.or]: [{id_gamemode: info}, {name: info}]
    }});
}

async getAllRegister(id_gamemode) {
  return database[this.nameModel].findAll({
    where: { id_gamemode: id_gamemode
    }});
}

async getRegisterName(name) {
  return database[this.nameModel].findAll({
    where: { name: name
    }});
}

}
module.exports = GameModeServices;
