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

exports.getStores = (req, res) => {
    Store.find({}, (err, stores) => {
        if(err){
            res.status(400).json({message: `${err}, No se encontraron tiendas`});
        }
        res.status(200).json({stores});
    });
};

exports.getStore = (req, res ) => {
    const {id} = req.params
    Store.findById(id).populate('products', 'name').exec((err, store) => {
        if(err){
            res.status(400).json({err});
        }
        res.json({store})
});
}

exports.getStores = (req, res) => {
   Store.find({}, (err, stores) => {
        if(err){
            res.status(400).json({message: `${err}, No se encontraron tiendas`});
        }
            res.status(200).json({stores});
    });
};
    
exports.getStore = (req, res ) => {
    const {id} = req.params
    Store.findById(id).populate('products', 'name').exec((err, store) => {
        if(err){
             res.status(400).json({err});
        }
        res.json({store})
    });
}
