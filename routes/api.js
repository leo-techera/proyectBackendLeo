const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const {validarId}= require('../middlewares/validarId');
const checks = require('../middlewares/checks');
const {validarChecks}= require('../middlewares/validarChecks');
const {validarJuego}= require('../middlewares/validarJuego')



router.get('/ver', apiController.verListado)
router.get('/listado/categoria/:categoria', apiController.listadoPorCategoria)
router.get('/buscar/id/:id', validarId, apiController.buscarPorId)
router.get('/buscar/nombre/:nombre',validarJuego, apiController.buscarJuego)
router.post('/crear',checks, validarChecks, apiController.crear)
router.put('/editar/:id',validarId,checks,validarChecks, apiController.editar)
router.delete('/borrar/:id',validarId, apiController.borrar)

module.exports = router