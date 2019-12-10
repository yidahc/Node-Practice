const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibroSchema = new Schema({
    gastos: {
        type: [Schema.Types.ObjectId],
        ref: 'Compra'
    },
    ingresos: {
        type: [Schema.Types.ObjectId],
        ref: 'Venta'        
    },
    nota:{
        type: String,
        maxlength:100000
    },
}, {timestamps: true});

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;