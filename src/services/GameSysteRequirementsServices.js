const Services = require('./Services.js');
const database = require('../models');

class GameSystemRequirementsServices extends Services {
  constructor(){
    super('GameSystemRequirementsServices');
  }

  async createRegister(newGameSystemRequirements) {
    return database[this.nameModel].create(newGameSystemRequirements);

  }

  async getRegister(GameSystemRequirements.id_game) {
    return database[this.nameModel].findOne({ where: { id_game: id_game }});
  }

}

module.exports = GameSystemRequirementsServices;
