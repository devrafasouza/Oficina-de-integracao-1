const Services = require('./Services.js');
const database = require('../models');

class PlatformServices extends Services {
  constructor(){
    super('Platform');
  }

  async createRegister(newPlatform) {
    return database[this.nameModel].create(newPlatform);

  }

  async getRegister(id_platform) {
    return database[this.nameModel].findOne({ where: { id_platform: id_platform }});
  }

}

module.exports = PlatformServices;
