const { Router } = require('express');
const UserController = require('../controllers/UserController');
const auth = require('../middlewares/auth.js');

const router = Router();

router.post('/register', UserController.registerUser); // Rota de registro de usuario
router.post('/login', UserController.loginUser); // Rota de login de usuario
router.post('/wallet:id', auth, UserController.purchaseUser); // Rota para desativar um usuario
//router.get('/wallet/:id', /*UserController.walletUser */); // Rota para acessar a carteira do usuario

module.exports = router;