const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentaSchema = new Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    nota:{
        type: String,
        maxlength:100000
    },
    articulos:{
        type: [Schema.Types.ObjectId],
        ref: 'Articulo',
    },
}, {timestamps: true});

const Venta = mongoose.model('Venta', VentaSchema);

module.exports = Venta;