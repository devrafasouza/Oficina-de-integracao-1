const database = require('../models');
const { Op } = require("sequelize");

const {GenreServices} = require('../services');
const genreServices = new GenreServices();


class GenreController {

static async registerGenre(req, res) {
    const newGenre = req.body;    
     try {
        const genre = await genreServices.createRegister(newGenre); /* cria um novo jogo no banco com o metodo create do sequelize */
        const data = {
             genre,
            message: "Genero cadastrado com sucesso"
        }
        return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message); //"Falha ao inserir Genero");
    }
}

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

static async searchGenre(req, res) {
    const genre = req.body;
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
    
}

module.exports = GenreController;
