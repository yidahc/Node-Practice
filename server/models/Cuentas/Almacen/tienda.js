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
    inventario: {
        type: [Schema.Types.ObjectId],
        ref: 'Inventario'
    },
    
});

const Tienda = mongoose.model('Tienda', TiendaSchema);

module.exports = Tienda;
