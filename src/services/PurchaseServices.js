const Services = require('./Services.js');
const database = require('../models');

class PurchaceServices extends Services {
  constructor(){
    super('Purchase');
  }

  async createRegister(newPurchase) {
    return database[this.nameModel].create(newPurchase);

  }

  async getRegister(id_purchase) {
    return database[this.nameModel].findOne({ where: { id_purchase: id_purchase }});
  }

  async getAllRegisters(column, data) {
    return database[this.nameModel].findAll({ where: { [column]: data }});
  }

}

module.exports = PurchaceServices;
