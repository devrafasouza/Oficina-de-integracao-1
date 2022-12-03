const User = require('../models/user');

module.exports = async (req, res, next) => {
    if(req.user.isAdmin == 1) {
      next();
    } else {
      return res.status(401).json({ message: "Você não tem autorização para essa requisição" });
    }
}
