const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProovedorSchema = new Schema ({
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
        ref: 'Compra'
      },
      commentario: {
        type: String
      }
})

const Proovedor = mongoose.model('Proovedor', ProovedorSchema);
module.exports = Proovedor;