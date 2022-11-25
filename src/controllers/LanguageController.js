const database = require('../models');
const { Op } = require("sequelize");

const {LanguageServices} = require('../services');
const languageServices = new LanguageServices();


class LanguageController {

//Registrar Language
static async registerLanguage(req, res) {
    const newLanguage = req.body;
    try {
        const language = await languageServices.createRegister(newLanguage); /* cria uma nova linguagem no banco com o metodo create do sequelize */
        const data = {
            language,
            message: "Linguagem cadastrada com sucesso"
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message); //"Falha ao inserir linguagem");
    }
}
//Atualizar linguagem
static async updateLanguage(req, res) {
    const updateLanguage = req.body;
        try {
        const language = await languageServices.updateRegister(updateLanguage,updateLanguage.id_language);
            const data = {
                language,
                message: "Linguagem Atualizada com sucesso"
            }
              return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
//Encontrar todas Linguagens
static async searchLanguage(req, res) {
    const info = req.body;
    try {
    const resultLanguage = await languageServices.getAllRegisters(info.id_language);
    const data = {
        resultLanguage,
        message: "Linguagens Encontradas com sucesso"
    }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Encontrar linguagem Especifica #ID
static async searchLanguageId(req, res) {
    const info= req.body;
    try {
    const resultLanguage = await languageServices.getRegister(info.id_language)
        const data = {
            resultLanguage,
            message: "Linguagem Encontrada com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Encontrar Linguagem Especifica #ptBR_name
static async searchLanguageptBR_Name(req, res) {
    const info= req.body;
    try {
    const findLanguageItem = await languageServices.getRegister(info.ptBR_name)
        const data = {
            findLanguageItem,
            message: "Linguagem pt br Encontrada com sucesso"
        }
    return res.status(200).json(data);
} catch (error) {
    return res.status(500).json(error.message);
}}

//Deletar linguagem
static async deleteLanguage(req, res) {
    const info = req.body;
        try {
        const deleteLanguageItem = await languageServices.deleteRegister(info.id_language);
            const data = {
                deleteLanguageItem,
                message: "Linguagem Deletada com sucesso"
            }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
}

module.exports = LanguageController;
