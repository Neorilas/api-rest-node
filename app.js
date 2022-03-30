// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'

// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');

// LLamamos a express para poder crear el servidor
var app = express();

// Aquí cargaremos la configuración de rutas posteriormente
var nota_routes = require('./routes/nota');

//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', nota_routes);

// Aquí configuraremos CORS posteriormenteç
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Aquí configuraremos rutas

// Por último exportamos este módulo para poder usar la variable app fuera de este archivo

module.exports = app;