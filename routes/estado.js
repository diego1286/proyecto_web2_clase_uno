
const { Router } = require('express');// se importa Router de node express 
const  { getEstados, getEstadoById, createEstado, updateEstadoById }= require('../controllers/estado');

const router = Router();// se debe inicializar el router de express

/**
 * Obtiene todos los estados activos
 */
router.get('/', getEstados );

/**
 * Obtiene un tipos de estado  por id
 */
 router.get('/:id', getEstadoById);

/**
 * Crea un estado
 */
router.post('/', createEstado);

/**
 * Actualiza un estado  por id
 */
router.put('/:id', updateEstadoById);

module.exports = router;