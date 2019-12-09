const Marca = require('../models/marca');

exports.newMarca = (req, res) => {
    let { nombre } = req.params;
    if(!nombre){
        res.status(400).json({error: "El nombre de la marca es requerido"});
    }
    let nuevaMarca = Marca({
        nombre: nombre
    });
    nuevaMarca.save((err, marca) => {
        if(err){
            res.status(400).json({err});
        }
        res.status(201).json({message:`${marca} creada`});
    })

}