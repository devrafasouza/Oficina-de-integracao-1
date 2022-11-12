const database = require('../models');


class gameController {
  static async registerGame(req, res) {
    const newGame = req.body;
        try {
        const newGame = await database.Games.create(newGame); /* cria um novo jogo no banco com o metodo create do sequelize */
        return res.status(200).menssage("jogo Inserido com sucesso");
    } catch (error) {
        return res.status(500).menssage("Falha ao inserir Game");
    }
}

static async editGame(req, res) {
 /*Como alterar o jogo no banco? */
    const newGame = req.body;   
        try {
        const newGame = await database.Games.create(newGame); /* cria um novo jogo no banco com o metodo create do sequelize */
        return res.status(200).menssage("jogo Inserido com sucesso");
    } catch (error) {
        return res.status(500).menssage("Falha ao inserir Game");
    }
}

static async deleteGame(req, res) {
    const newGame = req.body;

    /*Como receber o modal de confirmação? */
        try {
        const newGame = await database.Games.create(newGame); /* cria um novo jogo no banco com o metodo create do sequelize */
        return res.status(200).menssage("jogo Inserido com sucesso");
    } catch (error) {
        return res.status(500).menssage("Falha ao inserir Game");
    }
}

}

module.exports = GameController;

