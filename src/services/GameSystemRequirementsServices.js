const Services = require('./Services.js');
const database = require('../models');

class GameSystemRequirementsServices extends Services {
  constructor(){
    super('GameSystemRequirementsServices');
  }

  async createRegister(newGameSystemRequirements) {
    return database[this.nameModel].create(newGameSystemRequirements);

  }
/*
  async getRegister(info) {
    return database[this.nameModel].findOne({ 
      where:{[Op.or]:[{id_game:info},{name: info}]
      }});

}
*/

}
module.exports = GameSystemRequirementsServices;
