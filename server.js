const dotenv = require('dotenv').config();
const app = require('./app') // importa el modulo que est en el archivo app
const {  mongoConn } = require('./databases/configuration');// se importa el archivo de conexion de la base de datos 


app.set('port', process.env.PORT || 3000);

const conn = mongoConn(); // se instancia la conexion a la bd con la variable conn para ser importada

// escucha el puerto para que organizar se hagn en archivos apartes
app.listen(app.get('port'), () => {
    console.log(`Arranca el servidor en el puerto: ${app.get('port')}`)
});

/*en este archivo se tiene  la conexion del mongo  y donde se escucha el puerto en el servidor y el arranque del servidor*/


//mongodb+srv://das:Isa128624@mybdmongo.elcq1.mongodb.net/inventario
// ojo con los diamantes en la contrasena 