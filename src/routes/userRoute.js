const { Router } = require('express');
const UserController = require('../controllers/UserController');
const auth = require('../middlewares/auth');
const isMyId = require('../middlewares/isMyId');

const router = Router();

router.post('/register', UserController.registerUser); // Rota de registro de usuario
router.post('/login', UserController.loginUser); // Rota de login de usuario
router.post('/purchase/:id_user', auth, isMyId, UserController.purchaseUser); // Rota para cadastrar uma compra e associar a um usuario
//router.post('/wallet/:id_user', auth, isMyId, UserController.walletUser); // *NÃO ESTÁ FUNCIONANDO* Rota para acessar a carteira do usuario

module.exports = router;