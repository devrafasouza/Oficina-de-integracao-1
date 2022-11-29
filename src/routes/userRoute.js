const { Router } = require('express');
const UserController = require('../controllers/UserController');
const auth = require('../middlewares/auth');
const isMyId = require('../middlewares/isMyId');
const isActive = require('../middlewares/isActive.js');

const router = Router();

router.post('/register', UserController.registerUser); // Rota de registro de usuario
router.post('/login', UserController.loginUser); // Rota de login de usuario
router.post('/purchase/:id_user', isActive, auth, isMyId, UserController.purchaseUser); // Rota para cadastrar uma compra e associar a um usuario
//router.post('/wallet/:id_user', auth, isMyId, UserController.walletUser); // *NÃO ESTÁ FUNCIONANDO* Rota para acessar a carteira do usuario
router.put('/changeuser/:id_user', isActive, auth, isMyId, UserController.changeUser); // Rota que muda o nome do usuario
router.post('/recoveryaccount/sendemail', UserController.recoveryAccountSendEmail); //Rota que verifica se o email é de um usuario cadastrado no banco e envia um email de recuperação de senha
router.post('/recoveryaccount/:id_user', UserController.recoveryAccount); //Rota recuperação de conta usuario

module.exports = router;