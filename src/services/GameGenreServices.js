const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");


class GameGenreServices extends Services {
  constructor(){
    super('GameGenre');
  }

  async createRegister(newGame) {
    return database[this.nameModel].create(newGame);
  }
  async updateRegister(info,id_game) {
    return database[this.nameModel].update(info,{
      where: { id_game: id_game
      }});
  }
  async getAllRegisters(info) {
    return database[this.nameModel].findAll({
    where:{name:{[Op.like]:'%'+info+'%'
  }}});
  }
  async getRegister(info) {
    return database[this.nameModel].findOne({
      where:{[Op.or]:[{id_game:info},{name: info}]
      }
    });
  }
  async getRegisterCross(info) {
    return database[this.nameModel].findOne({
      where:{[Op.or]:[{id_game:info},{name: info}]
      },include:[{
        attributes:['nome'],
        model: gameGenre
      }]
    });
  }
  async deleteRegister(id_game) {
    return database[this.nameModel].destroy({
      where: { id_game: id_game
      }});
  }
}

module.exports = GameGenreServices;
