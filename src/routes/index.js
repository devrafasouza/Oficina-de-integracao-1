const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const users = require('./usersRoute'); /* rotas de usuarios */

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(users); /* Chama as rotas de usuario para o app */
}