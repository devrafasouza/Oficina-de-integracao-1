const { UserServices, GameServices, PurchaseServices } = require('../services');
const userServices = new UserServices();
const gameServices = new GameServices();
const purchaseServices = new PurchaseServices();

class UserController {
    static async registerUser(req, res) {
        const newUser = req.body;
        newUser.password = await userServices.hashPassword(newUser, 12);
        try {
            const user = await userServices.createRegister(newUser) /* cria um novo usuario no banco com o metodo create do sequelize */
            const data = {
                user,
                message: "Usuário cadastrado com sucesso"
            }
            return res.status(200).json(data);
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
            const token = await userServices.createToken(userValid);

            const data = {
                user: userValid,
                token,
                message: "Usuário logado com sucesso"
            }

            return res.status(200).json(data);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async purchaseUser(req, res) {
        const { id_user } = req.params;
        const { id_game } = req.body;

        try {
            const userPurchase = await userServices.getRegister(id_user);
            const gameValid = await gameServices.getRegister(id_game);
            const newPurchase = {
                id_game: gameValid.id_game,
                id_user: userPurchase.id_user,
                date: new Date()
            }
            const purchase = await purchaseServices.createRegister(newPurchase);

            const data = {
                game: gameValid,
                message: "Compra realizada com sucesso"
            }

            return res.status(200).json(data);

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async walletUser(req, res) { //Não ta funcionando
        const { id_user } = req.params;

        try {
            //const userWallet = await userServices.getRegister(id_user);
            const userPurchases = await purchaseServices.getAllRegisters();

            const data = {
               
            }

            return res.status(200).json("teste");

        } catch (error) {
            return res.status(500).json(error);
        }
    }

}

module.exports = UserController;

