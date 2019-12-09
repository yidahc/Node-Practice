const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marcaSchema = new Schema({
    nombre:{
        required: true, 
        type: String, 
        unique: 1,
        maxlength: 100
    }
});

const Marca = mongoose.model('Marca', marcaSchema);

module.exports = Marca;