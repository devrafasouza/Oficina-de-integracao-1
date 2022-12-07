const { Router } = require('express');
const GenreController = require('../controllers/GenreController');

const router = Router();

router.post('/registerGenre', GenreController.registerGenre); // Rota de registro de novo jogo
router.patch('/updateGenre', GenreController.updateGenre); // Rota para atualizar informações do jogo
router.get('/searchGenreName', GenreController.searchGenreName); // Rota de Busca de Generos Name
router.get('/searchGenreId', GenreController.searchGenreId); // Rota de Busca de Generos ID
router.delete('/deleteGenre', GenreController.deleteGenre); // Rota de exclusão de jogo


module.exports = router;
