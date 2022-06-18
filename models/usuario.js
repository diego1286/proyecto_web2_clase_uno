const { Schema, model } = require('mongoose');// se debe importar de la libreria mongoose para poder crear los schemas 

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Debe colocar un nombre']
    },
    email: {
        type: String,
        required: [true, 'Debe colocar un correo'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Usuario', UsuarioSchema);