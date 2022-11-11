const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.post('/register', UserController.registerUser); // Rota de registro de usuario
router.post('/login', /*UserController.loginUser*/); // Rota de login de usuario
router.patch('/usuarios/:id', /*UserController.disableUser*/); // Rota para desativar um usuario
router.get('/wallet/:id', /*UserController.walletUser */); // Rota para acessar a carteira do usuario
router.post('/alterarCadastro', /*UserController.updateUser*/); // Rota de atualização de usuario

module.exports = router;