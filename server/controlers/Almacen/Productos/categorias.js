const Categoria = require('../../../models/Almacen/Productos/categoria');

exports.newCategoria = (req, res) => {
    let { nombre } = req.params;
    if(!nombre){
        res.status(400).json({error: "El nombre de la categoria es requerido"});
    }
    let nuevaCategoria = Categoria({
        nombre: nombre
    });
    nuevaCategoria.save((err, categoria) => {
        if(err){
            res.status(400).json({err});
        }
        res.status(201).json({message:`${categoria} creada`});
    })

};

exports.getCategorias = (req, res) => {
    Categoria.find({}, (err, categorias) => {
        if(err){
            res.status(400).json({message: `${err}, No se encontraron categorias`});
        }
        res.status(200).json({categorias});
    });
};