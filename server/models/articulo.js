const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticuloSchema = new Schema({
    nombre: {
        type: String
    },
    precio: Number,
    stock_num: Number
}, {timestamps: true});

const Articulo = mongoose.model('articulo', ArticuloSchema);

module.exports = Articulo;