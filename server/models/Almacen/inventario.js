const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        maxlength:100
    },
    descripcion: String,
    costo: Number,
    precio: Number,
    imagenes: [String],
    proveedor: {
        type: Schema.Types.ObjectId,
        ref: 'Cuenta',
        required: true
    },
    marca:{
        type: Schema.Types.ObjectId,
        ref: 'Marca',
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
    },
    tiendas:{
        type: [{ type: Schema.Types.ObjectId}],
        ref: 'Tienda',
        required: true
    },
    disponibles:{
        type: Number
    },
    vendidos:{
        type: Number, //to determine how many items of this you have sold, so you can render the best selling items
        default: 0
    },
    activo:{     // to display it on the client when you chose to make it available to the public
        type: Boolean,
        default: false
    },
}, {timestamps: true});

const Inventario = mongoose.model('Inventario', InventarioSchema);

module.exports = Inventario;