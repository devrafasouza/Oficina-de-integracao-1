const database = require('../models');
const { Op } = require("sequelize");

const {GameModeServices} = require('../services');
const gameModeServices = new GameModeServices();


class GameModeController {

static async registerGameMode(req, res) {
    const newGameMode = req.body;
    try {
        const gameMode = await gameModeServices.createRegister(newGameMode);
        const data ={
            gameMode,
            message: "GameMode cadastrada com sucesso"
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

static async updateGameMode(req, res) {
    const updateGameMode = req.body;
        try {
        const gameMode = await gameModeServices.updateRegister(updateGameMode,updateGameMode.id_gameMode);
            const data = {
                gameMode,
                message: "GameMode Atualizada com sucesso"
            }
              return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

static async searchGameMode(req, res) {
    const info = req.body;
    try {
    const resultGameMode = await gameModeServices.getAllRegisters(info.id_gameMode);
    const data = {
        resultGameMode,
        message: "GameModes Encontradas com sucesso"
    }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

static async searchGameModeId(req, res) {
    const info= req.body;
    try {
    const resultGameMode = await gameModeServices.getRegister(info.id_gameMode)
        const data = {
            resultGameMode,
            message: "GameMode Encontrada com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

static async searchGameModeName(req, res) {
    const info= req.body;
    try {
    const findGameModeItem = await gameModeServices.getRegister(info.name)
        const data = {
            findGameModeItem,
            message: "GameMode Encontrada com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

static async deleteGameMode(req, res) {
    const info = req.body;
        try {
        const deleteGameModeItem = await gameModeServices.deleteRegister(info.id_gameMode);
            const data = {
                deleteGameModeItem,
                message: "GameMode Deletada com sucesso"
            }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
}

module.exports = GameModeController;
