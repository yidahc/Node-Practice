const Categoria = require('../models/categoria');

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

}