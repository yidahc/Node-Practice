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
    precio:{
        type: Number,
        maxlength: 255
    },
    marca:{
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        required: true
    },
    disponibilidad:{
        type: Number,
        maxlength: 4,
        default: 1
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    sold:{
        type: Number, //to determine how many items of this you have sold, so you can render the best selling items
        maxlength: 100,
        default: 0
    },
    publish:{     // to display it on the client when you chose to make it available to the public
        type: Boolean
    },
    images:{
    //    required: true,
        type: Array
    }
}, {timestamps: true});

const Articulo = mongoose.model('articulo', ArticuloSchema);

module.exports = Articulo;