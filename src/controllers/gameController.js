const database = require('../models');
const { Op } = require("sequelize");

const {GameServices} = require('../services');

const gameServices = new GameServices();



class GameController {

  //Registrar Jogo  
static async registerGame(req, res) {
    const newGame = req.body;    
    try {
        const game = await gameServices.createRegister(newGame); /* cria um novo jogo no banco com o metodo create do sequelize */
        const data = {
            game,
            message: "Game cadastrado com sucesso"
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message); //"Falha ao inserir Game");
    }
}

    //Atualizar Jogo
static async updateGame(req, res) { 
    const updateGame = req.body;   
        try {
        const game = await gameServices.updateRegister(updateGame,updateGame.id_game);
            const data = {
                game,
                message: "Game Atualizado com sucesso"
            }         
              return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
    //Desativar Jogo
static async inactivateGame(req, res) { 
    const statusGame = req.body;   
        try {
        const game = await gameServices.updateRegister(statusGame,statusGame.id_game);
            const data = {
                game,
                message: "Game Desativado com sucesso"
            }         
                return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

//Deletar Jogo   //Problema de FK
static async deleteGame(req, res) {
    const deleteGame = req.body;    
        try {
        const deleteGameItem = await gameServices.deleteRegister(deleteGame.id_game);
            const data = {
                deleteGameItem,        
                message: "Game Deletado com sucesso"
            }       
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}



//Encontrar Jogo Especifico ID
static async findGameID(req, res) {
    const findGame= req.body;
    try {
    const findGameItem = await gameServices.getRegister(findGame.id_game)
        const data = {
            findGameItem,
            message: "Game Encontrado com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Encontrar Jogo Especifico Name
static async findGameName(req, res) {
    const findGame= req.body;
    try {
    const findGameItem = await gameServices.getRegisterName(findGame.name)
        const data = {
            findGameItem,
            message: "Game Encontrado com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Encontrar Jogos por Genero
static async findGameGenre(req, res) {
    const findGameGenre = req.body; //Body acha o jogo por nome
    try {
    const GameItens = await database.Genre.findAll({
        where:{
            id_genre:{ [Op.ne]:findGameGenre.id_genre  }            
        },include:database.Game
    });
    const data = {
        GameItens,
        message: "Games Encontrados por Genero com sucesso"
    }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}
}

//Encontrar Jogos
static async findGames(req, res) {
    const findGames= req.body;     //Body acha o jogo por nome    
    try {
    const GameItens = await database.Game.findAll({
        where:{
            name:{[Op.like]: '%'+findGames.name+'%'  }             
        }
    });
    const data = {
        GameItens,
        message: "Games Encontrados com sucesso"
    }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}


}

module.exports = GameController;

