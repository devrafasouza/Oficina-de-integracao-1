const database = require('../models');
const { Op } = require("sequelize");

const {GameImageServices} = require('../services');

const gameImageServices = new GameImageServices();

class GameImageController {

static async registerGameImage(req, res) {
    const newGameImage= req.body;
    try {
    const GameImage = await gameImageServices.createRegister(newGameImage)
        const data = {
            gameImage,
            message: "Imagem cadastrada com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

static async deleteGameImage(req, res) {
    const newGameImage = req.body;
        try {
        const GameImage = await gameServices.deleteRegister(GameImage.id_game);
            const data = {
                gameImage,
                message: "Imagem Deletada com sucesso"
            }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

static async updateGameImage(req, res) {
    const updateGameImage = req.body;   
        try {
        const GameImage = await gameServices.updateRegister(GameImage.id_game);
            const data = {
                gameImage,
                message: "Imagem Atualizada com sucesso"
            }
              return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

}

module.exports = GameImageController;
