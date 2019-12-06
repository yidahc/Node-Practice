const Articulo = require('../models/articulo');

exports.newArticulo = (req, res) => {
    let params = req.body;
    if(!params.nombre){
        res.status(400).json({message: "El nombre del producto es requerido"});
    }
    let nuevoArticulo = Articulo({
        nombre: params.nombre,
        precio: params.precio,
        stock_num: params.stock_num
    });
    nuevoArticulo.save((err, articulo) => {
        if(err){
            console.log(err);
            res.status(400).json({message:"Error al crear nuevo Producto"});
        }
        res.status(201).json({message: articulo});
    })

}