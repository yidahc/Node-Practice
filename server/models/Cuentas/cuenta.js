const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 5df4587eeb05bf064c6d38b3
const CuentaSchema = new Schema ({
      nombre: {
        type: String,
        required: true,
        maxLength: 100 // name & last name must be a string with max 100 characters and is required
      },
      typo:{
        type: String,
        required: true,
        enum: ['Proovedor', 'Cliente']
      },
      direccion: String,
      direcciones: [String],
      contactos: {
        nombre: { type: String },
        email: { type: String },
        telefono: { type: Number },
        celular: { type: Number }
      },  
      telefono: {
        type: Number,
        maxLength: 20
      },
      email: {
        type: String,
        trim: true
      },
      celular: {
        type: Number,
        maxLength: 20
      },
      pedidos: [{ type: Schema.Types.ObjectId, ref: 'Orden' }],
      commentario: String,
      activo: {
        type: Boolean,
        default: true
     }
})

const Cuenta = mongoose.model('Cuenta', CuentaSchema);
module.exports = Cuenta;