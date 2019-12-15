const Inventario = require ('../../../models/Almacen/Productos/inventario')


// 5df44be99875be1ea8ecc1db <-- takis

exports.newInventario = (req, res) => {
    let nuevoInventario = new Inventario(req.body);
    nuevoInventario.save((err, inventario) => {
        if(err){
            console.log(err);
            res.status(400).json({message:"Error al crear nuevo Producto"});
        }
        res.status(201).json({message: inventario});
    })

}

exports.getInventarios = (req, res) => {
    Inventario.find({}).populate({path:'producto', select: 'nombre costo precio'}).populate({path:'tienda', select: 'nombre'}).exec((err, inventarios) => {
        if(err){
            res.status(400).json({message: `${err}, No se encontraron inventarios`});
        }
        res.status(200).json({inventarios});
    });
};

exports.getInventario = (req, res ) => {
    const {producto} = req.params;
    Inventario.find({product: producto}).populate('producto').exec((err, inventario) => { 
        if(err){
            res.status(400).json({err});
        }
        res.json({inventario})
});
}
