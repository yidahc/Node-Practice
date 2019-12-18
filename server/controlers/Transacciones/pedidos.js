const Pedido = require ('../../models/Transacciones/pedido')
//const Inventario = require ('../../models/Almacen/Productos/inventario')
// 5df60580dbcdcc33b8d7a006 <-- Venta takis y red bull
exports.nuevoPedido = (req, res) => {
    let newPedido = new Pedido(req.body);
    newPedido.save((err, pedido) => {
        if(err){
            console.log(err);
            res.status(400).json({message:err});
        }
        res.status(201).json(pedido);
    })
}

/*
db.students2.findOneAndUpdate(
   { _id : 1 },
   [ { $set: { "total" : { $sum: "$grades.grade" } } } ],  // The $set stage is an alias for ``$addFields`` stage
   { returnNewDocument: true }
)
*/
exports.finalizarPedido = (req, res) => {
    const id = req.query.id;
    Pedido.findOneAndUpdate(
        {_id:id},
        {$set:{"completado":true}}
    ).exec((err, pedido) => {
        if(err){
            res.status(400).json({error:"No se encontro pedido con este ID", message: `${err}`});
        }
        res.status(200).json({pedido});
    });
}

exports.getComprasPendientes = (req, res) => {
    Pedido.find({completado:false, typo:'Compra'})
        .populate('cuenta')
        .populate('articulos', 'nombre costo')
        .exec((err, compras) => {
            if(err){
                res.status(400).json({error:"No se encontraron compras pendientes", message: `${err}`});
            }
            res.status(200).json({compras});
        });
};

exports.getComprasFinalizadas = (req, res) => {
    Pedido.find({completado:true, typo:'Compra'})
        .populate('cuenta')
        .populate('articulos', 'nombre costo')
        .exec((err, compras) => {
            if(err){
                res.status(400).json({error:"No se encontraron compras finalizadas", message: `${err}`});
            }
            res.status(200).json({compras});
        });
};

exports.getVentasPendientes = (req, res) => {
    Pedido.find({completado:false, typo:'Venta'})
        .populate('cuenta')
        .populate('articulos')
        .exec((err, ventas) => {
            if(err){
                res.status(400).json({error:"No se encontraron ventas pendientes", message: `${err}`});
            }
            res.status(200).json(ventas);
        });
};

exports.getVentasFinalizadas = (req, res) => {
    Pedido.find({completado:true, typo:'Venta'})
        .populate('cuenta')
        .populate('articulos')
        .exec((err, ventas) => {
            if(err){
                res.status(400).json({error:"No se encontraron ventas finalizadas", message: `${err}`});
            }
            res.status(200).json({ventas});
        });
};

exports.getPedido = (req, res ) => {
    const {id} = req.query.id;
    Pedido.findById(id).populate('cuenta').populate('articulos').exec((err, pedido) => { 
        if(err){
            res.status(400).json({err});
        }
        res.json({pedido})
});
}

exports.getPedidosDeCliente = (req, res ) => {
    const {cuentaID} = req.params;
    Pedido.find({cuenta:cuentaID})
      .populate('articulos')
      .exec((err, pedidos) => { 
         if(err){
            res.status(400).json({err});
         }
         res.json({pedidos})
       });
}

exports.getPedidos = (req, res ) => {
    Pedido.find({})
      .populate('articulos', 'nombre costo precio')
      .populate('cuenta', 'nombre')
      .exec((err, pedidos) => { 
         if(err){
            res.status(400).json({err});
         }
         res.json({pedidos})
       });
}