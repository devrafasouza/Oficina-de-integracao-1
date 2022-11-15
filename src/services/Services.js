const database = require('../models');

/* 1- O importante da camada de services é desacoplar responsabilidades, para uma melhor logibilidade e manutenção do codigo */

/* 2- Outra coisa importante de ter uma camada de services é que se uma eventual mudança de banco de dados, o controllador não vai nem se preocupar com isso */

class Services {
  constructor(nameModel){
    this.nameModel = nameModel;
  }

  async pegaTodosOsRegistros() {
    return database[this.nameModel].findAll();
  }

  async pegaUmRegistro(id) {
    return database[this.nameModel].findOne({ where: { id: id }});
  }

  async createRegister(date) {
    return database[this.nameModel].create(date); /* cria um novo usuario no banco com o metodo create do sequelize */

  }

  async updateRegister(date, id) {
    return database[this.nameModel]
      .update(date, { where: { id: id }}); /* atualiza as informações de um usuario com as novas informações */
  }

  async apagaRegistro(id) {
    return database[this.nameModel]
      .destroy({ where: { id: id }});
  }

}

module.exports = Services;