'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express');

// Cargamos el controlador
var NotaController = require('../controllers/nota');

// Llamamos al router
var api = express.Router();

// Creamos una ruta del tipo get para el mismo metodo de pruebas
api.get('/pruebas', NotaController.pruebas);

api.post('/nota', NotaController.saveNota);
api.get('/notas', NotaController.getNotas);
api.get('/nota/:id', NotaController.getNota);
api.put('/nota/:id', NotaController.updateNota);
api.delete('/nota/:id', NotaController.deleteNota);

// Exportamos la configuración
module.exports = api;