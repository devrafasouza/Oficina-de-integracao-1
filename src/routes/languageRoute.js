const { Router } = require('express');
const LanguageController = require('../controllers/languageController');

const router = Router();

router.post('/registerLanguage', LanguageController.registerLanguage); // Rota de registro de nova linguagem
router.patch('/updateLanguage', LanguageController.updateLanguage); // Rota para atualizar informações da Linguagem
router.get('/searchLanguage', LanguageController.searchLanguage); // Rota de Busca de Linguagem
router.get('/searchLanguageId', LanguageController.searchLanguageId); // Rota de Busca de Linguagem #Id
router.get('/searchLanguageptBR_Name', LanguageController.searchLanguageptBR_Name); // Rota de Busca de Linguagem #Nome
router.delete('/deleteLanguage', LanguageController.deleteLanguage); // Rota de exclusão de Linguagem







module.exports = router;
