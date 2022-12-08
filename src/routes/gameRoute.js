const { Router } = require('express');
const auth = require('../middlewares/auth');
const isMyId = require('../middlewares/isMyId');
const isActive = require('../middlewares/isActive.js');
const isAdmin = require('../middlewares/isAdmin.js');
const GameController = require('../controllers/GameController');


const router = Router();

router.post('/registerGame', GameController.registerGame); // Rota de registro de novo jogo
router.post('/registerGameGenre', GameController.registerGameGenre); // Rota de registro de novo jogo
router.patch('/updateGame', GameController.updateGame); // Rota para atualizar informações do jogo
router.get('/searchGamesName', GameController.searchGamesName); // Rota de Busca de Jogos
router.get('/searchGamesId', GameController.searchGameId); // Rota de Busca de Jogo #Id








module.exports = router;
