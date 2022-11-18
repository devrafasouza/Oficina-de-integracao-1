const Services = require('./Services.js');
const database = require('../models');

class GenreServices extends Services {
  constructor(){
    super('Genre');
  }

  async createRegister(newGenre) {
    return database[this.nameModel].create(newGenre);
  }

  async getRegister(id_genre) {
    return database[this.nameModel].findOne({ where: { id_genre: id_genre }});
  }

}

module.exports = GenreServices;
