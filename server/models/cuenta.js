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
        enum: ['Proveedor', 'Cliente', 'Contacto']
      },
      direccion: {
        calle: { type: String },
        detalles: { type: String },
        referencia: { type: String },
        estado: { type: String },
        pais: { type: String },
        codPostal: {type: Number}
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
      commentario: String,
      contactos:{
        type: [{ type: Schema.Types.ObjectId}],
        ref: 'Cuenta',
      },
      activo: {
        type: Boolean,
        default: false
     }
     
})

const Cuenta = mongoose.model('Cuenta', CuentaSchema);
module.exports = Cuenta;