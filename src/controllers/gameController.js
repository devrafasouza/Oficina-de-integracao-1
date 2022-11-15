const { where } = require('sequelize');
const database = require('../models');
//const Op = Sequelize.Op


class GameController {


  //Registrar Jogo  
  static async registerGame(req, res) {
    const newGame = req.body;    
    try {
        const newGameItem = await database.Game.create(newGame); /* cria um novo jogo no banco com o metodo create do sequelize */
        return res.status(200).json(newGameItem);
    } catch (error) {
        return res.status(500).json(error.message); //"Falha ao inserir Game");
    }
}

    //Atualizar Jogo
static async updateGame(req, res) { 
    const updateGame = req.body;   
        try {
        const updateGameItem = await database.Game.update(updateGame,{ where: {id_game:updateGame.id_game}});      
        
        return res.status(200).json(updateGameItem);
    } catch (error) {
        return res.status(500).json(error.message);//"Falha ao atualizar Game");
    }
}

    //Deletar Jogo
static async deleteGame(req, res) {
    const deleteGame = req.body;    
        try {
        const deleteGameItem = await database.Game.destroy({where:{id_game: deleteGame.id_game}});      
        
        return res.status(200).json(deleteGameItem);
    } catch (error) {
        return res.status(500).json(error.message);//"Falha ao deletar Game");
    }
}

}
/*
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
}}*/ 

module.exports = GameController;

