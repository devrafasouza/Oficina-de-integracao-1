const { Router } = require('express');
const PlatformController = require('../controllers/platformController');

const router = Router();

router.post('/registerPlatform', PlatformController.registerPlatform);
router.patch('/updatePlatform', PlatformController.updatePlatform);
router.get('/searchPlatformId', PlatformController.searchPlatformId);
router.get('/searchPlatformName', PlatformController.searchPlatformName);
router.delete('/deletePlatform', PlatformController.deletePlatform);







module.exports = router;
