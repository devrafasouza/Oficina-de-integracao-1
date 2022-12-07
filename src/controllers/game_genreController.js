
const database = require('../models');
const { Op } = require("sequelize");


const {GameServices} = require('../services');
const {GenreServices} = require('../services');
const {Game_GenreServices} = require('../services');

const game_GenreServices = new Game_GenreServices();
const gameServices = new GameServices();
const genreServices = new GenreServices();


class Game_GenreController {

    static async registerGameGenre(req, res) {
       const { id_game } = req.params;  
       const info = req.body;       
        try {

            const game = await gameServices.getRegisterPK(id_game);
            const genre = await genreServices.getRegisterPK(info.id_genre);
            //const NewGame = await gameServices.createRegister(info);
           const infoFull={            
                game,
                genre                
            }                    
                if(!game || !genre){
                return res.status(400).json({error:"Game ou Genero não existe"});
                }
                console.log(game,genre);
        const newGameGenre = await game_GenreServices.createRegister(infoFull);                       

        const data = {                          
                newGameGenre,   
                message: "GameGenre cadastrado com sucesso"
            }
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
module.exports = Game_GenreController;