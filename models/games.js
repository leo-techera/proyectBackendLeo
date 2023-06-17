const {Schema , model} = require('mongoose');
const schema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    cantidadDeJugadores:{
        type: Number,
        required: true
    },
    nota:{
        type: Number,
        required: true
    },
    clasificacion:{
        type: String,
        required: true
    }
})

const Game = model('Game' , schema);
module.exports = { Game }


