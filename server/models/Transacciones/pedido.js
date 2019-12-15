const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PedidoSchema = new Schema({
    cuenta: {
        type: Schema.Types.ObjectId,
        ref: 'Cuenta',
        required: true
    },
    typo:{
        type: String,
        required: true,
        enum: ['Compra', 'Gasto']
      },
    nota:{
        type: String,
        maxlength:100000
    },
    articulos:{
        required: [{ type: Schema.Types.ObjectId, ref: 'Articulo' }]
    },
    monto: {
        required: Number,
    },
    completado: {
        type: Boolean,
        default: false,
        timestamps: true
    }
}, {timestamps: true});

const Pedido = mongoose.model('Pedido', PedidoSchema);

module.exports = Pedido;