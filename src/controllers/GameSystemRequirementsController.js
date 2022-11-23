const database = require('../models');
const { Op } = require("sequelize");

const {GameSystemRequirementsServices} = require('../services');
const gameSystemRequirements = new GameSystemRequirementsServices();


class GameSystemRequirementsController {

static async registerGameSystemRequirements(req, res) {
    const newGameSystemRequirements = req.body;
     try {
        const GameSystemRequirements = await gameSystemRequirements.createRegister(newGameSystemRequirements); /* cria um novo jogo no banco com o metodo create do sequelize */
        const data = {
            GameSystemRequirements,
            message: "Requerimento cadastrado com sucesso"
        }
        return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message); //"Falha ao inserir Genero");
    }
}
/*
    //Atualizar Genre
static async updateGenre(req, res) {
    const updateGenre = req.body;
        try {
        const genre = await genreServices.updateRegister(updateGenre,updateGenre.id_genre);
            const data = {
                genre,
                message: "Genero Atualizado com sucesso"
            }
              return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
    }
}

static async searchGenres(req, res) {
    const genre = req.body;//Body acha o jogo por nome
    try {
    const resultGenres = await genreServices.getAllRegisters(genre.name);
    const data = {
        resultGenres,
        message: "Games Encontrados com sucesso"
    }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

static async deleteGenre(req, res) {
    const genreDelete = req.body;
        try {
        const deleteGenreItem = await genreServices.deleteRegister(genreDelete.id_genre);
            const data = {
                deleteGenreItem,
                message: "Genre Deletado com sucesso"
            }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
  */
}

module.exports = GameSystemRequirementsController;
