const Articulo = require('../models/Cuentas/Productos/articulo');

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

exports.getArticulos = (req, res) => {
    Articulo.find({}, (err, articulos) => {
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
