'use strict'

// Cargamos el módulo de mongoose
var mongoose = require('mongoose');

// Definimos que usaremos los Schemas
var Schema = mongoose.Schema;

// Creamos el objeto del schema que tendrá dos campos tipo string
var NotaSchema = Schema({
    nombre: String,
    contenido: String
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Nota', NotaSchema);