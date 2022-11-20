const bodyParser = require('body-parser');
const cors = require('cors')
const user = require('./userRoute'); /* rotas de usuarios */
const game = require('./gameRoute')
const genre = require('./genreRoute')
const gameSystemRequirements = require('./GameSystemRequirementsRoute')


module.exports = app => {
  app.use(cors());
  app.use(bodyParser.json());    
  app.use(user); /* Chama as rotas de usuario para o app */
  app.use(game);
  app.use(genre);
  app.use(gameSystemRequirements);
}