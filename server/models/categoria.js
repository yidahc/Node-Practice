const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    nombre:{
        required: true, 
        type: String, 
        unique: 1,
        maxlength: 100
    }
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;