'use strict'

// Cargamos el modelo para usarlo posteriormente
var Nota = require('../models/nota');

// Creamos un método en el controlador, este de prueba
function pruebas(req, res) {
    // Devolvemos una respuesta
    res.status(200).send({
        message: 'Ruta de prueba de mi api RESTful'
    });
};
function saveNota(req, res) {
    var nota = new Nota();

    // Recogemos los parametros que nos llegan por POST
    var params = req.body;

    // Comprobamos que nos llega el nombre
    if (params.nombre) {
        // Asignamos valor a las propiedades del objeto Nota
        nota.nombre = params.nombre;
        nota.contenido = params.contenido;

        // Guardamos el documento en BD
        nota.save((err, notaStored)=> {
            // Si se produce un error lo devolvemos
            if (err) return res.status(500).send({message: 'Error en el servidor'});
            // Si se guarda el documento devolvemos el objeto guardado
            if (notaStored) {
                return res.status(200).send({
                    nota: notaStored
                });
            }
            else {
                return res.status(200).send({
                    message: 'No se ha guardado la nota'
                })
            }
        });
    } else {
        return res.status(200).send({
            message: 'El nombre es obligatorio'
        })
    }
}

function getNotas(req, res) {
    // Usamos el metodo find sobre nuestro modelo.
    Nota.find({}).sort({'_id':-1}).exec((err, notas) => {
        if(err) return res.status(500).send({ message: 'Error en el servidor' });
        // Devolvemos resultados
        if (notas) {
            return res.status(200).send({
                notas
            });
        } else {
            return res.status(404).send({
                message: 'No hay notas'
            })
        };
    })
}

function getNota(req, res) {
    var notaId = req.params.id;

    // Buscamos por ID
    Nota.findById(notaId).exec((err, nota) => {
        if (err) return res.status(500).send({ message: 'Error en el servidor' });

        if (nota) {
            return res.status(200).send({
                nota
            })
        } else {
            return res.status(404).send({
                message: 'No hay nota con ese ID'
            })
        }
    })
}

function updateNota(req, res) {
    var notaId = req.params.id;

    var update = req.body;

    Nota.findByIdAndUpdate(notaId, update, {new: true}, (err, notaUpdated) => {
        if (err) return res.status(500).send({ message: 'Error en el servidor' });
        if (notaUpdated) {
            res.status(200).send({
                nota: notaUpdated
            })
        } else {
            res.status(404).send({
                message: 'No existe la nota'
            })
        }
    })
}

function deleteNota(req, res) {
    var notaId = req.params.id;

    Nota.findByIdAndRemove(notaId, (err, notaRemoved) => {
        if (err) return res.status(500).send({ message: 'Error en el servidor' });
        
        if (notaRemoved) {
            return res.status(200).send({ 
                nota: notaRemoved
            })
        } else {
            return res.status(404).send({
                message: 'No existe la nota'
            })
        }
    })
}
// Exportamos las funciones en un objeto json para poder usarlas fuera de este fichero.

module.exports = {
    pruebas,
    saveNota,
    getNotas,
    getNota,
    updateNota,
    deleteNota
}