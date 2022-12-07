const User = require('../models/user');

module.exports = async (req, res, next) => {
    if(req.user.type == 'admin') {
      next();
    } else {
      return res.status(401).json({ message: "Você não tem autorização para essa requisição" });
    }
}
