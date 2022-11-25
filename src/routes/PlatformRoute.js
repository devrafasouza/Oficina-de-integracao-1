const { Router } = require('express');
const PlatformController = require('../controllers/PlatformController');

const router = Router();

router.post('/registerPlatform', PlatformController.registerPlatform);
router.patch('/updatePlatform', PlatformController.updatePlatform);
router.get('/searchPlatform', PlatformController.searchPlatform);
router.get('/searchPlatformId', PlatformController.searchPlatformId);
router.get('/searchPlatformName', PlatformController.searchPlatformName);
router.delete('/deletePlatform', PlatformController.deletePlatform);







module.exports = router;
