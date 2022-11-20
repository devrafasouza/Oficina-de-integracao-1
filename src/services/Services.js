const database = require('../models');
const { Op } = require("sequelize");
const nodemailer = require('nodemailer');

/* 1- O importante da camada de services é desacoplar responsabilidades, para uma melhor logibilidade e manutenção do codigo */

/* 2- Outra coisa importante de ter uma camada de services é que se uma eventual mudança de banco de dados, o controllador não vai nem se preocupar com isso */

class Services {
  constructor(nameModel){
    this.nameModel = nameModel;
  }
  async createRegister(info) {
    return database[this.nameModel].create(info); 
  }  
  async updateRegister(info, id) {
    return database[this.nameModel]
      .update(info, { where: { id: id }}); 
  }
  async getAllRegisters(info) {
    return database[this.nameModel].findAll({
    where:{name:{[Op.like]:'%'+info+'%' }}});
  }               
  async getRegister(info) {
    return database[this.nameModel].findOne({
       where:{[Op.or]:[{id_game:info},{name: info}]}});       
  }
  async deleteRegister(id) {
    return database[this.nameModel]
      .destroy({ where: { id:id }});
  }

  async sendEmail(data) {
    try {
      var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "KeyVaultRecovery@gmail.com",
          pass: "dzscptxqfdsvrvts"
        }
      });
  
      let info = await transport.sendMail({
        from: '<KeyVaultRecovery@gmail.com', 
        to: data.receiver, 
        subject: data.message.tittle, 
        text: data.message.body, 
        html: data.message.html, 
      });
      return "Email enviado com sucesso";
    } catch (error) {
      return `Email não enviado com sucesso ${error}`;
    }
  }

}

module.exports = Services;