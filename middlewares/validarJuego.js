const {Game} = require('../models/games')


const validarJuego = async (req, res, next)=>{
    const validarJuego = await Game.findOne({nombre: req.params.nombre})
    if (validarJuego == null) {
        res.json({msg: "no hay juego registrado"})
    }else{
        next()
    }

}

module.exports = {validarJuego}