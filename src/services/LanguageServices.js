const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class LanguageServices extends Services {
  constructor(){
    super('Language');
  }

  async createRegister(newLanguage) {
    return database[this.nameModel].create(newLanguage);

  }
  async getRegister(id_language) {
    return database[this.nameModel].findOne({
      where: {[Op.or]: [{id_Language: info}, {ptBR_name: info}]
      }});
  }

  async getRegisterptBR_Name(ptBR_name) {
    return database[this.nameModel].findAll({
      where: { ptBR_name: ptBR_name
      }});
  }
  async updateRegister(date,id_language) {
    return database[this.nameModel].update(date,{
      where: { id_language: id_language
      }});
  }

  async deleteRegister(id_language) {
    return database[this.nameModel].destroy({
      where: { id_language: id_language
      }});
  }

  async getAllRegister(id_language) {
    return database[this.nameModel].findAll({
      where: { id_language: id_language
      }});
  }

}

module.exports = LanguageServices;
