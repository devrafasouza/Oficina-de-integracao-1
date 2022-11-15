const database = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

class UserController {
  static async registerUser(req, res) {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(newUser.password, 12);
    try { 
        const newUserSite  = await database.User.create(newUser);
              
        return res.status(200).json(newUserActive);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
}

module.exports = UserController;

