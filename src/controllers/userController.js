const { UserServices, GameServices, PurchaseServices , Services } = require('../services');
const userServices = new UserServices();
const gameServices = new GameServices();
const purchaseServices = new PurchaseServices();
const services = new Services();

class UserController {
    static async registerUser(req, res) {
        const newUser = req.body;
        newUser.password = await userServices.hashPassword(newUser.password, 12);
        try {
            const user = await userServices.createRegister(newUser) /* cria um novo usuario no banco com o metodo create do sequelize */
            const data = {
                user,
                message: "Usuário cadastrado com sucesso!"
            };
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
                message: "Usuário logado com sucesso!"
            };

            return res.status(200).json(data);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async purchaseUser(req, res) {
        const { id_user } = req.params;
        const { id_game } = req.body;

        try {
            const userPurchase = await userServices.getRegister("id_user", id_user);
            const gameValid = await gameServices.getRegister("id_game", id_game);
            const newPurchase = {
                id_game: gameValid.id_game,
                id_user: userPurchase.id_user,
                date: new Date()
            };
            const purchase = await purchaseServices.createRegister(newPurchase);

            const data = {
                game: gameValid,
                purchase: {
                    id: purchase.id_purchase,
                    date: purchase.date
                },
                message: "Compra realizada com sucesso!",
            };

            return res.status(200).json(data);

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async walletUser(req, res) { 
        const { id_user } = req.params;

        try {
            const user = await userServices.getRegister("id_user", id_user);
            const userPurchases = await purchaseServices.getAllRegisters("id_user", user.id_user);
            const games = await Promise.all(userPurchases.map( async (value) => {
                return await gameServices.getAllRegisters("id_game", value.id_game);
                
            }));

            const data = {
                name: user.name,
                userPurchases,
                games,
                message: "Carteira do usuario acessada com sucesso!"
               
            }

            return res.status(200).json(data);

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async changeUser(req, res) {
        const { id_user } = req.params;
        const { name } = req.body;

        try {
            const user = await userServices.getRegister("id_user", id_user);
            const userUpdated = {
                ...user
            };
            userUpdated.name = name;
            await userServices.updatedUser(userUpdated, Number(id_user)); 

            const data = {
                message: "Nome alterado com sucesso!",
                newName: name,

            };
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async recoveryAccountSendEmail(req, res) {
        const { email } = req.body;
        
        const user = await userServices.getRegister("email", email);

        const data = {
            receiver: email,
            message: {
                tittle: "Recuperação de conta 'KeyVault 🗝️' ✔",
                text: "Acesse o link para recuperar a conta", 
                html: `<a>www.keyvault.com.br/recoveryaccount/${user.id_user}</a>`,
            } 
        }
        
        const userValid = await userServices.getRegister("email", data.receiver);
        if(userValid){
            const email = await services.sendEmail(data);
            return res.status(200).json(email);
            
        }
        return res.status(500).json("Email invalido!");

    }

    static async recoveryAccount(req, res) {
        const { id_user } = req.params;
        const { password } = req.body;


        try {
            const user = await userServices.getRegister("id_user", id_user);
            const userUpdated = {
            ...user
            } 
            userUpdated.password = await userServices.hashPassword(password, 12);
            await userServices.updatedUser(userUpdated, Number(id_user));
            return res.status(200).json("Senha redefinida com sucesso!") 
        } catch (error) {
            return res.status(500).json("Não foi possivel recuperar a conta.");
        }
    }

}

module.exports = UserController;

