const Usuario = require ('../models/usuario')

exports.registrarUsuario = (req, res) => {
    let nuevoUsuario = new Usuario(req.body);
    nuevoUsuario.save((err, usuario) => {
        if(err){
            console.log(err);
            res.status(400).json({message:"Error al registrar nuevo usuario"});
        }
        res.status(201).json({message: usuario});
    })
}


exports.loginUsuario = (req, res ) => {
    const {id} = req.params;
    Usuario.findById(id),'contrasena'.exec((err, usuario) => { 
        if(err){
            res.status(400).json({err});
        }
        if (usuario)
        res.json({usuario})
    });
}
