const jsonwebtoken = require('jsonwebtoken');
const database = require('../models');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const { id_user } = req.params

    if(!authHeader) {
      return res.status(404).json({ mensagem: "Falta de token"});

    }

    const [, token] = authHeader.split(" ")


    try {
      const { sub } = jsonwebtoken.verify(token, "5f4dcc3b5aa765d61d8327deb882cf99");

      const user = await database.User.findOne({
        where: {
          id_user: sub
        }

      })
      req.user = user;
      req.id_user = id_user;
      next();
      if(!user) {
        return res.status(404).json({ mensagem: "Usuario não existe na base de dados"});
      }
    } catch (error) {
      return res.status(404).json({ mensagem: "Token invalido"});

    }
}
