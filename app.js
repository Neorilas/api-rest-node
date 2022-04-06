'use strict'
// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');

// LLamamos a express para poder crear el servidor
var app = express();
// Cargamos las rutas de nuestra API
var nota_routes = require('./routes/nota');
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Nombre por el que atacaremos posteriormente a la API (puede ser el que te salga de ahi mismo)
app.use('/api', nota_routes);

// Lo de las CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Por último exportamos este módulo para poder usar la variable app fuera de este archivo

module.exports = app;