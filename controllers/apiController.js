const {Game} = require ('../models/games')

class ApiController {
    async verListado (req, res){
        const videoGames = await Game.find()
        res.status(200).json({videoGames})
    }
    async listadoPorCategoria (req, res){
        const videoGames = await Game.find({categoria: req.params.categoria})
        res.status(200).json(videoGames)
    }
    async buscarPorId (req, res){
        const videoGames = await Game.findById(req.params.id)
        res.status(200).json(videoGames)
    }
    async buscarJuego (req, res){
        const videoGames = await Game.findOne({nombre: req.params.nombre})
        res.status(200).json(videoGames)
    }
    async crear (req, res){
        try {
            const juegoGuardado = new Game(req.body)
            await juegoGuardado.save()
            res.status(201).json(juegoGuardado)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async editar (req, res){
        try {
            await Game.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({
                msg: "el juego con id" + req.params.id + "se actualizó"
            })
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async borrar (req, res){
        await Game.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg: "el juego con id" + req.params.id + "se eliminó"
        })
}
}

module.exports = new ApiController