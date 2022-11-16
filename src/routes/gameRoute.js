const { Router } = require('express');
const GameController = require('../controllers/GameController');

const router = Router();

router.post('/registerGame', GameController.registerGame); // Rota de registro de novo jogo
router.patch('/updateGame', GameController.updateGame); // Rota para atualizar informações do jogo
router.delete('/deleteGame', GameController.deleteGame); // Rota de exclusão de jogo
router.get('/searchGame', GameController.findGame); // Rota de Busca de Jogo
router.get('/searchGames', GameController.findGames); // Rota de Busca de Jogos
router.get('searchGenre', GameController.findGameGenre); // Rota de Busca de Jogo por Genero


module.exports = router;