
const { Router } = require('express');// se importa Router de node express 
const  { getMarcas, getMarcaById, createMarca, updateMarcaById }= require('../controllers/marca');

const router = Router();// se debe inicializar el router de express

/**
 * Obtiene todos los Marcas activos
 */
router.get('/', getMarcas );

/**
 * Obtiene un tipos de Marcas  por id
 */
 router.get('/:id', getMarcaById);

/*
 * Crea un Marca
 */
router.post('/', createMarca);

/**
 * Actualiza un Marcas  por id
 */
router.put('/:id', updateMarcaById);

module.exports = router;