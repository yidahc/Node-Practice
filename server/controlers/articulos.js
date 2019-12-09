const Articulo = require('../models/articulo');

exports.newArticulo = (req, res) => {
    let nuevoArticulo = new Articulo(req.body);
    nuevoArticulo.save((err, articulo) => {
        if(err){
            console.log(err);
            res.status(400).json({message:"Error al crear nuevo Producto"});
        }
        res.status(201).json({message: articulo});
    })

}