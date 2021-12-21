const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { CorsOptions } = require('./Objects/CorsOptions');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}));
app.use(cookieParser());

//Servindo informações para Front-End
app.use(express.static(path.join(__dirname, 'public')));

//Chamando as rotas
require('./interface/http/home')(app);
require('./interface/http/buscaCep')(app);

//Resolvendo problema de Cors no navegador
app.use(cors(CorsOptions));

//Analisando o Código para compartilhar com a função ErrorHandler 
require('./functions/ErrorStatus');

//Função para tratamento do erro. 
require('./functions/ErrorHandler');

//Exportando a função. 
module.exports = app;
