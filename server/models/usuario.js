const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    email: {
        type: String,
        required: true,
        trim: true, // remove whitespace
        unique: 1 // only one user per email, 1 is for true
      },
      contrasena: {
        type: String,
        required: true,
        minLength: 5 // password must be a string at least 5 characters long and is required
      },
      nombre: {
        type: String,
        required: true,
        maxLength: 50 // name & last name must be a string with max 100 characters and is required
      },
      apellido: {
        type: String,
        required: true,
        maxLength: 50
      },
      rol: {
        type: Number,
        default: 0 // either you are an administrator or a user
      }, // 0 is for user and that is the default for any new account
      token: {
        type: String 
      }
})

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;