'use strict'

// Cargar modulo de mongoose para conectar a MongoDB
var mongoose = require('mongoose');

// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;

// Cargamos el fichero app.js con la config de express
var app = require('./app.js');

// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3800;

// Usamos el método connect para conectarnos a nuestra BD
mongoose.connect('mongodb://localhost:27017/prueba').then(()=>{
    //Cuando se realiza la conexión lanzamos un mensaje por consola
    console.log('Conexión a MongoDB correcta');
    // CREAR EL SERVIDOR WEB CON NODEJS
    app.listen(port, ()=> {
        console.log('El servidor está corriendo en el puerto: ' + port);
    })
}).catch(err => console.log(err));