const database = require('../models');
const { Op } = require("sequelize");

const {GenreServices} = require('../services');

const genreServices = new GenreServices();


class GameController {

//Registrar Jogo  
static async registerGame(req, res) {
    const newGame = req.body;    
    try {
        const game = await genreServices.createRegister(newGame); /* cria um novo jogo no banco com o metodo create do sequelize */
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
        const game = await genreServices.updateRegister(updateGame,updateGame.id_game);
            const data = {
                game,
                message: "Game Atualizado com sucesso"
            }         
              return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
//Encontrar Jogos
static async searchGames(req, res) {
    const info = req.body;//Body acha o jogo por nome    
    try {
    const resultGames = await genreServices.getAllRegisters(info.name);
    const data = {
        resultGames,
        message: "Games Encontrados com sucesso"
    }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Encontrar Jogo Especifico #ID
static async searchGameId(req, res) {
    const info= req.body;
    try {
    const resultGame = await genreServices.getRegister(info.id)
        const data = {
            resultGame,
            message: "Game Encontrado com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Encontrar Jogo Especifico #Name
static async searchGameName(req, res) {
    const info= req.body;
    try {
    const findGameItem = await genreServices.getRegister(info.name)
        const data = {
            findGameItem,
            message: "Game Encontrado com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Deletar Jogo   //Problema de FK
static async deleteGame(req, res) {
    const info = req.body;    
        try {
        const deleteGameItem = await genreServices.deleteRegister(info.id_game);
            const data = {
                deleteGameItem,        
                message: "Game Deletado com sucesso"
            }       
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
}

module.exports = GameController;

