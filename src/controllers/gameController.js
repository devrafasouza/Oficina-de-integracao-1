const database = require('../models');
const { Op } = require("sequelize");

const {GameServices} = require('../services');
const {GenreServices} = require('../services');
const {Game_GenreServices} = require('../services');

const gameServices = new GameServices();
const genreServices = new GenreServices();
const gameGenreServices = new Game_GenreServices();

class GameController {

//Registrar Jogo  
static async registerGame(req, res) {
   const info=req.body;
    try { 
        const newGame = await gameServices.createRegister(info);
        const genre = await genreServices.getRegister(info.id_genre);       
        
        //const gameGenre = await gameGenreServices.getAllRegisters(newGame.id_game);
        console(genre);
        //console(newGame.id_game);
/*
        const games = await Promise.all(userPurchases.map( async (value) => {
                return await gameServices.getAllRegisters("id_game", value.id_game);
                
            }));

        
        const id_genre = await genreServices.getRegister("id_genre",info.id_genre);    
         const gamegenre = await Promise.all(id_genre.map( async (value) => {
            return await gameServices.getAllRegisters("id_game", value.id_game);            
       }));*/

        const data = {        
            newGame,
            gamegenre,
            message: "Carteira do usuario acessada com sucesso!"
           
        }

        return res.status(200).json();

    } catch (error) {
        return res.status(500).json(error);
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

//Encontrar Jogos Genero ID
static async searchGamesCross(req, res) {
    //const info = req.body;
    try {
    const resultGames = await gameServices.getAllRegisters4();
    console.log(resultGames);
    //const resultGames2 = await gameServices.getAllRegisters3();
    //console.log(resultGames2);
    /*
    const data = {
        resultGames,
        message: "Games Encontrados com sucesso"    }*/

    return res.status(200).json(resultGames);
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

