const { UserServices } = require('../services');
const userServices = new UserServices();

class UserController {
    static async registerUser(req, res) {
        const newUser = req.body;
        newUser.password = await userServices.hashPassword(newUser.password, 12);
        try {
            const newUserTeste = await userServices.userRegister(newUser)
            /* cria um novo usuario no banco com o metodo create do sequelize */
            return res.status(200).json(newUserTeste);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async loginUser(req, res) {
        const { email, password } = req.body;

        try {
            const userValid = await userServices.loginUser(email);
            if (!userValid) {
                throw new Error("Email ou senha invalida!");
            }
            const passwordValid = await userServices.compareHash(password, userValid.password);
            if (!passwordValid) {
                throw new Error("Email ou senha invalida!");
            }
            const token = await userServices.createToken(userValid.id);

            return res.status(200).json(token);


        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async purchaseUser(req, res) {
        const { id_user, id_game } = req.params;

        try {
            const userValid = await database.User.findOne({
                where: {
                    email: email
                }
            });
            if (!userValid) {
                throw new Error("Email ou senha invalida!");
            }
            const passwordValid = await bcrypt.compare(password, userValid.password);
            if (!passwordValid) {
                throw new Error("Email ou senha invalida!");
            }
            const token = jsonwebtoken.sign({}, "5f4dcc3b5aa765d61d8327deb882cf99", {
                subject: String(userValid.id),
                expiresIn: "1d"
            });

            return res.status(200).json(token);


        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = UserController;

