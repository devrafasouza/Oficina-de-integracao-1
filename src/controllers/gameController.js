const database = require('../models');


class GameController {
  static async registerGame(req, res) {
    const newGame = req.body;
        try {
        const newGame = await database.Games.create(newGame); /* cria um novo jogo no banco com o metodo create do sequelize */
        return res.status(200).menssage("jogo Inserido com sucesso");
    } catch (error) {
        return res.status(500).menssage("Falha ao inserir Game");
    }
}
static async updateGame(req, res) { 
    const updateGame = req.body;       
        try {
        const newGame = await database.Games.save(updateGame); 
        return res.status(200).menssage("jogo Atualizado com sucesso");
    } catch (error) {
        return res.status(500).menssage("Falha ao atualizar Game");
    }
}

static async deleteGame(req, res) {
        const deleteGame = req.body;
        try {
        const deleteGame = await database.Games.destroy({
            where:{
                deleteGame
            }
        });
        return res.status(200).menssage("jogo Deletado");
    } catch (error) {
        return res.status(500).menssage("Falha ao deletar Game");
    }
}

static async findGame(req, res) {
    const findGame = req.body;
    try {
    const findGame = await database.Games.findOne({
        where:{
            findGame
        }
    });
    return res.status(200).menssage("jogo Deletado");
} catch (error) {
    return res.status(500).menssage("Falha ao deletar Game");
}
}




}

module.exports = GameController;

