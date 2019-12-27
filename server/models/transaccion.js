const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransaccionSchema = new Schema({
    cuenta: {
        type: Schema.Types.ObjectId,
        ref: 'Cuenta',
        required: true
    },
    typo:{
        type: String,
        required: true,
        enum: ['Compra', 'Venta']
    },
    nota:{
        type: String,
        maxlength:100000
    },
    articulos:{
        type: [{ type: Schema.Types.ObjectId}],
        ref: 'Articulo',
        required: true
    },
    descuento: Number,
    monto: {
        required: Number,
    },
    estatus:{
        type: String,
        required: true,
        enum: ['Cotizacion', 'Orden', 'Factura']
    },
}, {timestamps: true});

const Transaccion = mongoose.model('Transaccion', TransaccionSchema);

module.exports = Transaccion;