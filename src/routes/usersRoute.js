const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.post('/register', UserController.registerUser); // Rota de registro de usuario

module.exports = router;