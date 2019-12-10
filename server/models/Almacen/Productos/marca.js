const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarcaSchema = new Schema({
    nombre:{
        required: true, 
        type: String, 
        unique: 1,
        maxlength: 100
    }
});

const Marca = mongoose.model('Marca', MarcaSchema);

module.exports = Marca;