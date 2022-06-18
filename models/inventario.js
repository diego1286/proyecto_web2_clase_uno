const{ Schema, model}= require('mongoose');// se debe importar el modulo schema de mongo est es de la libreria express y mongo

const InventarioSchema= Schema({
    serial:{
        type: String,
        required:[true, 'Serial requerido'],
        unique: true
    },
    modelo:{
        type: String,
        required:[true, 'modelo requerido'],
        unique: true
    },
    descripcion:{
        type: String,
    },
    foto: {
        type: String,
    },
    color:{
        type: String,
    },
    fechaCompra:{
        type: String,
        default: new Date()
    },
    precio:{
        type: Number,
    },
    usuario:{// Es la manera de relacionar las tablas  
        type: Schema.Types.ObjectId, // usuario es un tipo de schema y trae el id del tipo de usuario
        ref:'Usuario',//  aca se hace la referencia al modelo que se encuentra en la carpeta rutas
        required: true
    },
    marca:{
        type: Schema.Types.ObjectId,
        ref:'Marca',
        required: true
    },
    estado:{// relacion de la tabla  estado es la manera de ralacionar en mongo
        type: Schema.Types.ObjectId,
        ref:'Estado', // la tabla estado se relaciona con la de inventario en este manera 
        required: true
    },
    tipoEquipo:{
        type: Schema.Types.ObjectId,
        ref:'TipoEquipo',// relacion con la tabla tipoEquipo 
        required: true
    }
});
module.exports = model('Inventario', InventarioSchema);

