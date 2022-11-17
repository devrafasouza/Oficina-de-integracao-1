const Services = require('./Services.js');
const database = require('../models');

class LanguageServices extends Services {
  constructor(){
    super('Language');
  }

  async createRegister(newLanguage) {
    return database[this.nameModel].create(newLanguage);

  }

  async getRegister(id_language) {
    return database[this.nameModel].findOne({ where: { id_language: id_language }});
  }

}

module.exports = LanguageServices;
