const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class PlatformServices extends Services {
  constructor(){
    super('Platform');
  }

  async createRegister(newPlatform) {
    return database[this.nameModel].create(newPlatform);
  }

  async updateRegister(date,id_platform) {
    return database[this.nameModel].update(date,{
      where: { id_platform: id_platform
      }});
  }

  async deleteRegister(id_platform) {
    return database[this.nameModel].destroy({
     where: { id_platform: id_platform
  }});
}

async getRegister(id_platform) {
  return database[this.nameModel].findOne({
    where: {[Op.or]: [{id_platform: info}, {name: info}]
    }});
}

async getAllRegister(id_platform) {
  return database[this.nameModel].findAll({
    where: { id_platform: id_platform
    }});
}

async getRegisterName(name) {
  return database[this.nameModel].findAll({
    where: { name: name
    }});
}

}
module.exports = PlatformServices;
