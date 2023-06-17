const {check}= require('express-validator')

const checks = [
    check('nombre')
        .notEmpty().withMessage('el campo nombre es obligatorio')
        .isString().withMessage('el campo nombre debe ser un string'),
    check('categoria')
        .notEmpty().withMessage('el campo categoria es obligatorio')
        .isString().withMessage('el categoria alias debe ser un string'),
    check('cantidadDeJugadores')
        .notEmpty().withMessage('el campo ciudad es obligatorio')
        .isNumeric().withMessage('el campo ciudad debe ser un numero'),
    check('nota')
        .notEmpty().withMessage('el campo nota es obligatorio')
        .isNumeric().withMessage('el campo nota debe ser un numero'),
    check('clasificacion')
        .notEmpty().withMessage('el campo clasificacion es obligatorio')
        .isString().withMessage('el campo clasificacion debe ser un string'),
]

module.exports = checks