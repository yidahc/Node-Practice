const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TiendaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String
    },
    articulos: {
        type:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'articulo'
            }
        ]
    }
});

const Tienda = mongoose.model('tienda', TiendaSchema);

module.exports = Tienda;
