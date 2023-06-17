const index = (req, res) => {
    res.send(`Hola ${req.params.nombre}`)
}

module.exports = {index}