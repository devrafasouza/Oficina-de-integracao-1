const database = require('../models');
const { Op } = require("sequelize");


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
        const updateGameItem = await database.Game.update(updateGame,{ 
            where: {id_game:updateGame.id_game
            }});      
              return res.status(200).json(updateGameItem);
    } catch (error) {
        return res.status(500).json(error.message);//"Falha ao atualizar Game");
    }
}

    //Deletar Jogo
static async deleteGame(req, res) {
    const deleteGame = req.body;    
        try {
        const deleteGameItem = await database.Game.destroy({
            where:{id_game: deleteGame.id_game}});     
        return res.status(200).json(deleteGameItem);
    } catch (error) {
        return res.status(500).json(error.message);//"Falha ao deletar Game");
    }
}
//Encontrar Jogo
static async findGame(req, res) {
    const findGame= req.body; //Body acha o jogo por nome extato
    try {
    const findGameItem = await database.Game.findOne({
        where:{
            name: findGame.name           
        }
    });
    return res.status(200).json(findGameItem);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Encontrar Jogos

static async findGames(req, res) {
    const findGame= req.body;     //Body acha o jogo por nome    
    try {
    const findGameItem = await database.Game.findAll({
        where:{
            name:{[Op.like]: '%'+findGame.name+'%'  }             
        }
    });
    return res.status(200).json(findGameItem);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Encontrar Jogos por Genero
static async findGameGenre(req, res) {
    const findGameGenre = req.body; //Body acha o jogo por nome
    try {
    const findGame = await database.Genre.findAll({
        where:{
            id_genre:{ [Op.ne]:findGameGenre.id_genre  }            
        },include:database.Game
    });
    return res.status(200).json(findGame);
} catch (error) {
    return res.status(500).json(error.message);
}
}
}

module.exports = GameController;

