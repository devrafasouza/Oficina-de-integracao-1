const { Router } = require('express');
const auth = require('../middlewares/auth');
const isMyId = require('../middlewares/isMyId');
const isActive = require('../middlewares/isActive.js');
const isAdmin = require('../middlewares/isAdmin.js');
const GameController = require('../controllers/GameController');


const router = Router();

router.post('/registerGame:id_user', isActive, auth, isMyId,isAdmin, GameController.registerGame); // Rota de registro de novo jogo
router.patch('/updateGame:id_user', isActive, auth, isMyId,isAdmin, GameController.updateGame); // Rota para atualizar informações do jogo
router.get('/searchGamesName', GameController.searchGamesName); // Rota de Busca de Jogos
router.get('/searchGamesId', GameController.searchGamesId); // Rota de Busca de Jogo #Id








module.exports = router;
