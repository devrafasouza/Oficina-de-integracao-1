const database = require('../models');
const { Op } = require("sequelize");

const {GameServices} = require('../services');
const {GameGenreServices} = require('../services');
const gameServices = new GameServices();
const gameGenreServices = new GameGenreServices();

class GameController {

//Registrar Jogo  
static async registerGame(req, res) {
    const newGame = req.body;     
    console.log(newGame.isDiscountActive); 
    try {
        const game = await gameServices.createRegister(newGame);        
        
        const id_genre= newGame.id_genre
        const id_game= game.id_game
        
        const Game = {
            id_game,
            id_genre          
        }
        
        const newGame_Genre = await gameGenreServices.createRegister(Game);
        
        const data = {
            newGame_Genre,
            message: "Game cadastrado com sucesso"
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
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
//Encontrar Jogos ID
static async searchGamesName(req, res) {
    const game = req.body;
    try {
    const resultGames = await gameServices.getAllRegisters(game.name);
    const data = {
        resultGames,
        message: "Games Encontrados com sucesso"    }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}
//Encontrar Jogos Name
static async searchGamesId(req, res) {
    const info = req.body;
    try {
    const resultGames = await gameServices.getAllRegisters(info.id);
    const data = {
        resultGames,
        message: "Games Encontrados com sucesso"    }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Encontrar Jogo Especifico #ID
static async searchGameId(req, res) {
    const info= req.body;
    try {
    const resultGame = await gameServices.getRegister(info.id)
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
    const findGameItem = await gameServices.getRegister(info.name)
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
        const deleteGameItem = await gameServices.deleteRegister(info.id_game);
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

