const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventarioSchema = new Schema({
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Articulo',
        unique: true,
    },
    disponibles:{
        type: Number,
        default: 1
    },
    vendidos:{
        type: Number, //to determine how many items of this you have sold, so you can render the best selling items
        default: 0
    },
    publicar:{     // to display it on the client when you chose to make it available to the public
        type: Boolean,
        default: true
    },
    tienda: {
        type: Schema.Types.ObjectId,
        ref: 'Tienda',
    },
}, {timestamps: true});

const Inventario = mongoose.model('Inventario', InventarioSchema);

module.exports = Inventario;