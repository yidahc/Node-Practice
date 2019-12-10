const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    nombre:{
        required: true, 
        type: String, 
        unique: 1,
        maxlength: 100
    }
});

const Categoria = mongoose.model('Categoria', CategoriaSchema);

module.exports = Categoria;