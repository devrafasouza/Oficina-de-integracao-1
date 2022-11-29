const database = require('../models');
const nodemailer = require('nodemailer');

/* 1- O importante da camada de services é desacoplar responsabilidades, para uma melhor logibilidade e manutenção do codigo */

/* 2- Outra coisa importante de ter uma camada de services é que se uma eventual mudança de banco de dados, o controllador não vai nem se preocupar com isso */

class Services {
  constructor(nameModel){
    this.nameModel = nameModel;
  }

  async getAllRegisters() {
    return database[this.nameModel].findAll();
  }

  async getRegister(id) {
    return database[this.nameModel].findOne({ where: { id: id }});
  }

  async createRegister(date) {
    return database[this.nameModel].create(date); /* cria um novo usuario no banco com o metodo create do sequelize */

  }

  async updateRegister(date, id) {
    return database[this.nameModel]
      .update(date, { where: { id: id }}); /* atualiza as informações de um usuario com as novas informações */
  }

  async deleteRegister(id) {
    return database[this.nameModel]
      .destroy({ where: { id: id }});
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
        text: data.message.text, 
        html: data.message.html, 
      });
      return "Email enviado com sucesso";
    } catch (error) {
      return `Email não enviado com sucesso ${error}`;
    }
  }

}

module.exports = Services;