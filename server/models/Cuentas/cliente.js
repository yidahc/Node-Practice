const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema ({
    email: {
        type: String,
      },
      nombre: {
        type: String,
        required: true,
        maxLength: 100 // name & last name must be a string with max 100 characters and is required
      },
      direccion: {
        type: String,
        maxLength: 500
      },    
      telefono: {
        type: Number,
        maxLength: 20
      },
      pedidos: {
        type: [Schema.Types.ObjectId],
        ref: 'Venta'
      },
      commentario: {
        type: String
      }
})

const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = Cliente;