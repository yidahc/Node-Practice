const Articulo = require ('../../../models/Almacen/Productos/articulo')

// 5df449dff0883d1654882ccf <-- takis
// 5df458b8aa736028c8faa3eb <-- Red Bull

exports.newArticulo = (req, res) => {
    let nuevoArticulo = new Articulo(req.body);
    nuevoArticulo.save((err, articulo) => {
        if(err){
            console.log(err);
            res.status(400).json({message:err});
        }
        res.status(201).json({message: articulo});
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
