const { Router } = require('express');
const imageController = require('../controllers/gameImageController');

const router = Router();

router.post('/registerGameImage', imageController.registerGameImage); // Rota de registro de nova imagem
router.patch('/updateGameImage', imageController.updateGameImage); // Rota para atualizar informações do Imagem
router.delete('/deleteGameImage', imageController.deleteGameImage); // Rota de exclusão de imagem*/

module.exports = router;
