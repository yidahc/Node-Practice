const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdenSchema = new Schema({
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
    articulos:[{type:Schema.ObjectId, ref:'Articulo', required:true}],
    descuento: Number,
    monto: {
        required: Number,
    },
    completado: {
        type: Boolean,
        default: false,
        timestamps: true
    }
}, {timestamps: true});

const Orden = mongoose.model('Orden', OrdenSchema);

module.exports = Orden;