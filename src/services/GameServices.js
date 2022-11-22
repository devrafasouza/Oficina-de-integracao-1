const Services = require('./Services.js');
const database = require('../models');
const { Op } = require("sequelize");



class GameServices extends Services {
  constructor(){
    super('Game');
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
  async getRegisterCross(info) {
    const { Genre } = ('../models');
    //const { id_game } = req.body; 
    return database[this.nameModel].findAll({
    where:{name:{[Op.like]:'%'+info+'%' 
  }},
  include: {
      model: Game, 
      where: {
        id_game: {$col: 'Game.id_game'}
      }
  }
})};
   
  async getRegister(info) {
    return database[this.nameModel].findOne({ 
      where:{[Op.or]:[{id_game:info},{name: info}]
      }
    });
  } 
    async deleteRegister(id_game) {
    return database[this.nameModel].destroy({ 
      where: { id_game: id_game 
      }});
  }
}

module.exports = GameServices;