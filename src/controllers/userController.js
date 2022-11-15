const database = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

class UserController {
  static async registerUser(req, res) {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(newUser.password, 12);
    try {
        const newUserTeste = await database.User.create(newUser); /* cria um novo usuario no banco com o metodo create do sequelize */
        return res.status(200).json(newUserTeste);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
    static async loginUser(req, res) {
        const { email, password } = req.body;

        try {
            const usuarioValido = await database.User.findOne({
                where: {
                    email: email
                }
            });
            console.log(usuarioValido.id)
            if (!usuarioValido) {
                throw new Error("Email ou senha invalida!");
            }
            const senhaValida = await bcrypt.compare(senha, usuarioValido.senha);
            if (!senhaValida) {
                throw new Error("Email ou senha invalida!");
            }
            const token = jsonwebtoken.sign({}, "5f4dcc3b5aa765d61d8327deb882cf99", {
                subject: String(usuarioValido.id),
                expiresIn: "1d"
            });

            return res.status(200).json(token);


        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
    static async testeUser(req, res) {
        const teste = await database.User.create()({
        name: "My super User"
        })
        .then((newUser) => {
        // The get() function allows you to recover only the DataValues of the object
        console.log(newUser.get())
        })
        .catch((err) => {
            return res.status(500).json(err); 
        })

    }    

}

module.exports = UserController;

