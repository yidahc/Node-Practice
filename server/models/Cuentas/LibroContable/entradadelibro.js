const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entradadelibroSchema = new Schema({
    typo: { // <-- 
        type: String,
        enum : ['ingreso','gasto'],
        default: 'gasto'
    },
    nota:{
        type: String,
        maxlength:100000
    },
    ingreso: {
        type: Schema.Types.ObjectId,
        ref: 'Proovedor',
        required: false,
    },
    gasto: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: false,
    },
    nota:{
        type: String,
        maxlength:100000
    },
    articulos:{
        type: [Schema.Types.ObjectId],
        ref: 'Inventario',
    },
    monto: {
        required: Number,
    }
}, {timestamps: true});

const entradadelibro = mongoose.model('entradadelibro', entradadelibroSchema);

module.exports = entradadelibro;