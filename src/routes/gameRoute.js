const { Router } = require('express');
const GameController = require('../controllers/GameController');
const Game_GenreController = require('../controllers/Game_GenreController');


const router = Router();

router.post('/registerGame', GameController.registerGame); // Rota de registro de novo jogo

router.patch('/updateGame', GameController.updateGame); // Rota para atualizar informações do jogo
router.get('/searchGamesName', GameController.searchGamesName); // Rota de Busca de Jogos
router.get('/searchGamesId', GameController.searchGamesId); // Rota de Busca de Jogo #Id

//
router.post('/registerGame/:id_game/Genre', Game_GenreController.registerGameGenre); // Rota de registro de novo jogo
//
router.get('/searchGamesCross', GameController.searchGamesCross); // Rota de Busca de Jogos


router.delete('/deleteGame', GameController.deleteGame); // Rota de exclusão de jogo







module.exports = router;
