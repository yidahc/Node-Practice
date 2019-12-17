const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticuloSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        maxlength:100
    },
    descripcion: String,
    costo: Number,
    precio: Number,
    imagenes: [String],
    marca:{
        type: Schema.Types.ObjectId,
        ref: 'Marca',
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
    },
}, {timestamps: true});

const Articulo = mongoose.model('Articulo', ArticuloSchema);

module.exports = Articulo;