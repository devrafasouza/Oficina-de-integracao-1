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
    where:{[Op.or]:[{name:{[Op.like]:'%'+info+'%' }},{id_game:info}]
  }
  });
  }        
  async getRegister(info) {
    return database[this.nameModel].findOne({ 
      where:{[Op.or]:[{id_game:info},{name: info}]
      }
    });
  } 
  async getRegisterPK(info) {
    return database[this.nameModel].findByPk(info);
      }  
  
    async deleteRegister(id_game) {
    return database[this.nameModel].destroy({ 
      where: { id_game: id_game 
      }});
  }

  async getAllRegisters2() {
    return database[this.nameModel].findAll({ include: database.Genre.id_genre });
}
async getAllRegisters3() {
  return database[this.nameModel].findAll({ include: database.Game_genre });
}
async getAllRegisters4() {
  return database[this.nameModel].findAll({
    include: [
      {
        model: 'Game_genre',
        include: [database.Game, database.Genre]
      },
      {
        model:database.Genre,
        include: {
          model: database.Game,
          include: {
            model: 'Game_genre',
            include: [database.Game, database.Genre]
          }
        }
      }
    ]
  });
}



}

module.exports = GameServices;