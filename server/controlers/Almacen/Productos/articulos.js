const Articulo = require ('../../../models/Almacen/Productos/articulo')
const Inventario = require ('../../../models/Almacen/Productos/inventario')
// 5df449dff0883d1654882ccf <-- takis
// 5df458b8aa736028c8faa3eb <-- Red Bull

exports.newArticulo = (req, res) => {
    let params = req.body;
    let nuevoArticulo = Articulo({
        nombre: params.nombre,
        descripcion: params.descripcion,
        costo: params.costo > 0 ? params.costo : null,
        precio: params.precio > 0 ? params.precio : null,
        imagenes: params.imagenes ? params.imagenes : [],
        marca: params.marca ? params.marca : null,
        categoria: params.categoria ? params.categoria : null
    });
    nuevoArticulo.save((err, articulo) => {
        if(err){
            console.log(err);
            res.status(400).json({message:"error al crear articulo", Error: err});
        }
        let newInventario = Inventario ({
            producto: articulo._id,
            disponibles: params.disponibilidad,
            publicar: params.publicar,
            tienda: params.tienda ? params.tienda : null
        });
        newInventario.save((err,inventario) => {
            if(err){
                console.log(err);
                res.status(400).json({message: "creacion de inventario han fallado", Error: err});
            }
            res.status(201).json({Message: "articulo e inventario han sido creados",
                                    Article: articulo,
                                    Inventory: inventario});
        })
    })

}

exports.getArticulos = (req, res) => {
    Articulo.find({}).populate('marca').populate('categoria').exec((err, articulos) => {
        if(err){
            res.status(400).json({message: `${err}, No se encontraron articulos`});
        }
        res.status(200).json({articulos});
    });
};

exports.getArticulo = (req, res ) => {
    const {id} = req.params;
    Articulo.findById(id).populate('marca').populate('categoria').exec((err, articulo) => { 
        if(err){
            res.status(400).json({err});
        }
        res.json({articulo})
});
}
