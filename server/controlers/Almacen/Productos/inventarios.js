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

exports.getActiveInventarios = (req, res) => {
    Inventario.find({publicar:true, disponibles: { $gt: 0 },}).populate({path:'producto', select: 'nombre costo precio'}).populate({path:'tienda', select: 'nombre'}).exec((err, inventarios) => {
        if(err){
            res.status(400).json({message: `${err}, No se encontraron inventarios`});
        }
        let productosActivos = []
        inventarios.map(e=> productosActivos.push(e.producto))
        res.status(200).json(productosActivos);
    });
};

exports.getInventario = (req, res ) => {
    const {articulo, tienda} = req.params;
    Inventario.find({producto: articulo, tienda:tienda})
              .populate('producto')
              .exec((err, inventario) => { 
                if(err){
                    res.status(400).json({err});
                }
                res.json({inventario})
              });
}
