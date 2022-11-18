const { Router } = require('express');
const GameController = require('../controllers/GameController');

const router = Router();

router.post('/registerGame', GameController.registerGame); // Rota de registro de novo jogo
router.patch('/updateGame', GameController.updateGame); // Rota para atualizar informações do jogo
router.get('/searchGames', GameController.searchGames); // Rota de Busca de Jogos
router.get('/searchGameId', GameController.searchGameId); // Rota de Busca de Jogo #Id
router.get('/searchGameName', GameController.searchGameName); // Rota de Busca de Jogo #Nome
//router.get('/searchGameName', GameController.searchGameGenre); // Rota de Busca de Jogo #Genero
router.delete('/deleteGame', GameController.deleteGame); // Rota de exclusão de jogo







module.exports = router;