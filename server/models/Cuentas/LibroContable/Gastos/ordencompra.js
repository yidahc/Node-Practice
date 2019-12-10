const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompraSchema = new Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Proovedor',
    }
    nota:{
        type: String,
        maxlength:100000
    },
    articulos:{
        type: [Schema.Types.ObjectId],
        ref: 'Articulo',
    },
    monto: {
        required: Number,
    },
}, {timestamps: true});

const Compra = mongoose.model('Compra', CompraSchema);

module.exports = Compra;