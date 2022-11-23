const database = require('../models');
const { Op } = require("sequelize");

const {GameGenreServices} = require('../services');
const gameGenreServices = new gameGenreServices();


class GameGenreController {

    //Encontrar Jogo Especifico #Genero
static async searchGameGenero(req, res) {
    const info= req.body;
    try {
    const findGameItem = await gameServices.getRegisterCross(info.id_genre)
        const data = {
            findGameItem,
            message: "Game Encontrado com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}



}

module.exports = GenreController;
