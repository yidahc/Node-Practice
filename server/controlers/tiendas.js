const Tienda = require('../models/tienda');

exports.newTienda = (req, res) => {
    let params = req.body;
    if(!params.nombre){
        res.status(400).json({message: "El nombre de la tienda es requerido"});
    }
    let nuevaTienda = Tienda({
        nombre: params.nombre,
        direccion: params.direccion,
        articulos: params.articulos
    });
    nuevaTienda.save((err, tienda) => {
        if(err){
            console.log(err);
            
            res.status(400).json({message:"Error al crear nueva Tienda"});
        }
        res.status(201).json({message: tienda});
    })

}