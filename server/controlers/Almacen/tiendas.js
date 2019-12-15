const Tienda = require('../../models/Almacen/tienda');

exports.newTienda = (req, res) => {
    let params = req.body;
    if(!params.nombre){
        res.status(400).json({message: "El nombre de la tienda es requerido"});
    }
    let nuevaTienda = Tienda({
        nombre: params.nombre,
        direccion: params.direccion,
        productos: params.articulos
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
    const {id} = req.params; // *** se puede elegir solo ciertos productos?
    Tienda.findById(id).populate('inventario', 'producto').exec((err, tienda) => {  
    // productos -> the name field I want to populate(according to the Tienda schema), from the object 'Inventario' 
        // we are bringing in info from the 'Inventario' object, for each id in the 'inventario' array in the Tienda schema
    //'inventario'-> the only field I want to bring from every 'inventario' record(entry), to populate this 'inventarios' field   
        // we are bringing in only the name, for each 'inventario' in the 'inventarios' field found in this Tienda record/entry
        if(err){
            res.status(400).json({err});
        }
        res.json({tienda})
    });
}
