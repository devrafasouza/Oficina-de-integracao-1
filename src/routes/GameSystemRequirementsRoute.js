const { Router } = require('express');
const GameSystemRequirementsController = require('../controllers/GameSystemRequirementsController');

const router = Router();

router.post('/registerGameSystemRequirements', GameSystemRequirementsController.registerGameSystemRequirements); // Rota de registro de novo jogo
/*router.patch('/updateGameSystemRequirements', GameSystemRequirementsController.updateGameSystemRequirements); // Rota para atualizar informações do jogo
router.get('/searchGameSystemRequirementss', GameSystemRequirementsController.searchGameSystemRequirementss); // Rota de Busca de Jogos
router.delete('/deleteGameSystemRequirements', GameSystemRequirementsController.deleteGameSystemRequirements); // Rota de exclusão de jogo
/*router.get('/searchGameId', GameController.searchGameId); // Rota de Busca de Jogo #Id
router.get('/searchGameName', GameController.searchGameName); // Rota de Busca de Jogo #Nome
//router.get('/searchGameName', GameController.searchGameGameSystemRequirements); // Rota de Busca de Jogo #Genero

*/


module.exports = router;
