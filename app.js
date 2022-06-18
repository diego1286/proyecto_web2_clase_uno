const express = require("express");
const cors = require('cors');

// se debe de realizar estas importaciones importantes para la funcion del proyecto
const app = express(); // trae el servidor que esta ene el archivo server
//const fileUpload= require('express-fileupload'); revisar esta linea de coamando por que da error apenas se activa 


const usuarios = require("./routes/usuario"); // tra el archivo de usuarios que equivale a importar
const tiposEquipo = require("./routes/tipoEquipo");
const estados= require('./routes/estado');
const marcas= require('./routes/marca')
const inventarios= require('./routes/inventario')// se debe traer los modulos para luego ahcer los empoint
const fileUpload = require('express-fileupload');


//middlewares se colocan antes  de los empoint 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// actualiza la foto
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


//app.use('/api/categorias', categoria); // estos son los empoint para acceder a las diferentes rutas desde el fron
//app.use('/api/productos', producto);// se crea la ruta acceer desde el fron se puede usar el path.join
app.use("/api/usuarios", usuarios); // empoint de usuarios la correr en el servidor
app.use("/api/tiposequipo", tiposEquipo);
app.use("/api/estados", estados);
app.use("/api/marcas", marcas);
app.use('/api/inventarios', inventarios);


module.exports = app;

/* 
se traen las rutas y los middle




*/
