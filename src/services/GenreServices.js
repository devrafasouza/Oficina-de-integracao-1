const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class GenreServices extends Services {
  constructor(){
    super('Genre');
  }

  async createRegister(newGenre) {
    return database[this.nameModel].create(newGenre);
  }
  
  async getRegister(info) {
    return database[this.nameModel].findOne({
      where: {[Op.or]: [{id_genre: info}, {name: info}]
      }});
  }

  async getRegisterName(name) {
    return database[this.nameModel].findAll({
      where: { name: name
      }});
  }
  async updateRegister(date,id_genre) {
    return database[this.nameModel].update(date,{
      where: { id_genre: id_genre
      }});
  }

  async deleteRegister(id_genre) {
    return database[this.nameModel].destroy({
      where: { id_genre: id_genre
      }});
  }

  async getAllRegister(id_genre) {
    return database[this.nameModel].findAll({
      where: { id_genre: id_genre
      }});
  }

}

module.exports = GenreServices;
