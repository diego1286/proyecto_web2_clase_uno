
const { Router } = require("express");
const router = Router();

// se debe importar los metodos del controlador en la ruta usuario para que se pueda hacer el crude
const {getUsuarios, createUsuario } = require("../controllers/usuario");

// obtener todos los usuarios activos 
router.get("/", getUsuarios);

// crear usuarios
router.post("/", createUsuario);

// obtener un usuario por id
router.get("/:id", (req, res) => {
  res.json({});
});



//actualizar un usuarios por id  se utiliza el put para este metodo ya que trae todo el objeto
router.put("/:id", (req, res) => {
  res.json({});
});

// actualizar una parte del usuarios el metodo patch trae parte del objeto a actulizar
router.patch("/:id", (req, res) => {
  res.json({});
});

//Borrar usuario
router.delete("/:id", (req, res) => {
  res.json({});
});

module.exports = router;
