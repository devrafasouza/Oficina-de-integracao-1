const database = require('../models');
const { Op } = require("sequelize");

const {GameServices,GenreServices} = require('../services');
const gameServices = new GameServices();
const genreServices = new GenreServices();


class GenreController {

    static async registerGenre(req, res) {
        const newGenre = req.body;    
        try {
            const genre = await genreServices.createRegister(newGenre); /* cria um novo jogo no banco com o metodo create do sequelize */
            const data = {
                genre,
                message: "Genre cadastrado com sucesso"
            }
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message); //"Falha ao inserir Game");
        }
    }
    
}

module.exports = GenreController;
