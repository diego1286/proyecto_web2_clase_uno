
const { request, response } = require("express"); //se requiere la respueta y la pregunta para poder
const Usuario = require("../models/usuario"); // como se trabaja con el usermodel se debe traer el modulo completo ene esta linea

/**
 * Consultar todos los usuarios activos
 */
 const getUsuarios = async (req, res = response) => {
  try{
      const query = { estado: true};
      const usuariosBD = await Usuario.find(query);
      res.json(usuariosBD);
  }catch(e){
      return res.status(500).json({
          error: e
      })
  }
}

const createUsuario = async (req = request, res = response) => {// se debe pasar por parametro la request y response en el metodo
  try {// se hace el tratamiento de los datos 
    const body = req.body;// se deben recibir los datos que son enviados por el body
    const usuario = new Usuario(body);// se crea una instancia del modelo y de los que se recibe por body para que sea guardado
    
    await usuario.save(); // devuelve una promesa await y guarda usuario en la bd por medio del modelo

    console.log(body);// esta liena imprime el objeto en la consola

    res.json(usuario);// me trae el json enviado por e postman
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};

module.exports = {getUsuarios, createUsuario }; // se exporta el metodo para pasarlo en la rutas y la ruta particular de usuario
