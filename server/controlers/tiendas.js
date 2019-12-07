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

exports.getTiendas = (req, res) => {
    Tienda.find({}, (err, tiendas) => {
        if(err){
            res.status(400).json({message: `${err}, No se encontraron tiendas`});
        }
        res.status(200).json({tiendas});
    });
};

exports.getTienda = (req, res ) => {
    const {id} = req.params;
    Tienda.findById(id).populate('articulos', 'nombre').exec((err, tienda) => { 
    // articulos-> the field I want to populate, from the object 'articulo' 
    //'nombre'-> the only field I want to bring from 'articulo' to populate this 'articulos' field
        if(err){
            res.status(400).json({err});
        }
        res.json({tienda})
});
}
