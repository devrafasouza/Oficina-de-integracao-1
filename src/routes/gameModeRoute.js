const { Router } = require('express');
const GameModeController = require('../controllers/gameModeController');

const router = Router();

router.post('/registerGameMode', GameModeController.registerGameMode);
router.patch('/updateGameMode', GameModeController.updateGameMode);
router.get('/searchGameModeId', GameModeController.searchGameModeId);
router.get('/searchGameModeName', GameModeController.searchGameModeName);
router.delete('/deleteGameMode', GameModeController.deleteGameMode);







module.exports = router;
