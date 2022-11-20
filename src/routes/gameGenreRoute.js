const { Router } = require('express');
const GameGenreController = require('../controllers/GameGenreController');

const router = Router();


router.get('/searchGameGenre', GameGenreController.searchGameGenre); // Rota de Busca de Jogo #Nome








module.exports = router;