const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

routes(app); /* recebe as rotas e inicializa o express */




app.listen(port, () => console.log(`Servidor rodando na porta ${port}-Funcionou!`));



module.exports = app;
