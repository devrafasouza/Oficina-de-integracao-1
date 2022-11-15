const { Router } = require('express');
const GameController = require('../controllers/GameController');

const router = Router();

router.post('/registerGame', GameController.registerGame); // Rota de registro de novo jogo
//router.patch('/updateGame', GameController.updateGame); // Rota para atualizar informações do jogo
router.delete('/deleteGame', GameController.deleteGame); // Rota de exclusão de jogo
///router.get('/searchGame', GameController.findGame); // Rota de exclusão de jogo

module.exports = router;