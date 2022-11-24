const { Router } = require('express');
const GenreController = require('../controllers/GenreController');

const router = Router();

router.post('/registerGenre', GenreController.registerGenre); // Rota de registro de novo jogo
router.patch('/updateGenre', GenreController.updateGenre); // Rota para atualizar informações do jogo
router.get('/searchGenre', GenreController.searchGenre); // Rota de Busca de Jogos
router.delete('/deleteGenre', GenreController.deleteGenre); // Rota de exclusão de jogo*/


module.exports = router;