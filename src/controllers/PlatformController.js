const database = require('../models');
const { Op } = require("sequelize");

const {PlatformServices} = require('../services');

const platformServices = new PlatformServices();


class PlatformController {

static async registerPlatform(req, res) {
    const newPlatform = req.body;
    try {
        const platform = await platformServices.createRegister(newPlatform);
           const data={ platform,
            message: "Plataforma cadastrada com sucesso"
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

static async updatePlatform(req, res) {
    const updatePlatform = req.body;
        try {
        const platform = await platformServices.updateRegister(updatePlatform,updatePlatform.id_platform);
            const data = {
                platform,
                message: "Plataforma Atualizada com sucesso"
            }
              return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

static async searchPlatformId(req, res) {
    const info= req.body;
    try {
    const resultPlatform = await platformServices.getRegister(info.id_platform)
        const data = {
            resultPlatform,
            message: "Plataforma Encontrada com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

static async searchPlatformName(req, res) {
    const info= req.body;
    try {
    const findPlatformItem = await platformServices.getRegister(info.name)
        const data = {
            findPlatformItem,
            message: "Plataforma Encontrada com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

static async deletePlatform(req, res) {
    const info = req.body;
        try {
        const deletePlatformItem = await platformServices.deleteRegister(info.id_platform);
            const data = {
                deletePlatformItem,
                message: "Plataforma Deletada com sucesso"
            }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
}

module.exports = PlatformController;
