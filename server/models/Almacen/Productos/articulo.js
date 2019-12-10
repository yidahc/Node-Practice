const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticuloSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: 1,
        maxlength:100
    },
    descripcion:{
        type: String,
        maxlength:100000
    },
    costo:{
        type: Number,
        maxlength: 5
    },
    precio:{
        type: Number,
        maxlength: 5
    },
    imagenes:{
        type: Array
    },
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