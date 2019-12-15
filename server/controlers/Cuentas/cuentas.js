const Cuenta = require ('../../models/Cuentas/cuenta')

// 5df4528b3312e526203b6d13 <-- test client
// 5df458266c2766350c59f383
// 5df4587eeb05bf064c6d38b3
exports.registrarCuenta = (req, res) => {
    let nuevoCuenta = new Cuenta(req.body);
    nuevoCuenta.save((err, cuenta) => {
        if(err){
            console.log(err);
            res.status(400).json({message:"Error al registrar nueva cuenta"});
        }
        res.status(201).json({message: cuenta});
    })
}

exports.getCuentas = (req, res ) => {
    Cuenta.find({activo:true}).populate('pedidos').exec((err, cuentas) => { 
        if(err){
            res.status(400).json({err});
        }
        if (cuentas)
        res.json({cuentas})
    });
}

exports.getClientesActivos = (req, res ) => {
    Cuenta.find({activo:true,typo:'Cliente'}).populate('pedidos').exec((err, clientes) => { 
        if(err){
            res.status(400).json({err});
        }
        if (clientes)
        res.json({clientes})
    });
}

exports.getProovedoresActivos = (req, res ) => {
    Cuenta.find({activo:true,typo:'Proovedor'}).populate('pedidos').exec((err, proovedores) => { 
        if(err){
            res.status(400).json({err});
        }
        if (proovedores)
        res.json({proovedores})
    });
}

exports.getCuentaByID = (req, res ) => {
    const {id} = req.params;
    Cuenta.findById(id).populate('pedidos').exec((err, cuenta) => { 
        if(err){
            res.status(400).json({err});
        }
        if (cuenta)
        res.json({cuenta})
    });
}
