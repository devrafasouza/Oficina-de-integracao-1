const database = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

class UserController {
  static async registerUser(req, res) {
    const newUser = req.body;
    newUser.senha = await bcrypt.hash(newUser.senha, 12);
    try {
        const newUser = await database.Users.create(newUser); /* cria um novo usuario no banco com o metodo create do sequelize */
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

}

module.exports = UserController;

