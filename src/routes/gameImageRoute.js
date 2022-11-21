const { Router } = require('express');
const imageController = require('../controllers/gameImageController');

const router = Router();

router.post('/registerGameImage', GameImageController.registerGameImage); // Rota de registro de nova imagem
router.patch('/updateGameImage', GameImageController.updateGameImage); // Rota para atualizar informações do Imagem
router.delete('/deleteGameImage', GameImageController.deleteGameImage); // Rota de exclusão de imagem*/

module.exports = router;
