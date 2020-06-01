const mongoose = require("mongoose")
const crypto = require('bcryptjs')
const jwt = require('jsonwebtoken')
const v = require("validator")
// esquema modelo usuario
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(c) {
      if (!v.isEmail(c)) {
        throw new Error("correo invalido");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    validate(p) {
      if (p.toLowerCase().includes("contraseña")) {
        throw new Error("tu clave no puede contener la palabra contraseña");
      }
    },
  },
  token: {
    type: String,
  },
})

// validate credentials
userSchema.statics.findCredential = async(email, password) => {
  const user = await User.findOne({
      email
  })
  const match = await crypto.compare(password, user.password)
  if (!match) {
      throw new Error('no se pudo loguear')
  }
  return user;
}
// token generate
userSchema.methods.generateToken = async function() {
  const user = this
  console.log('usrr', user);
  const token = jwt.sign({
              email: user.email,
          },'la_llave')
  user.token = user.token
  await user.save()
  return token
}

const User = mongoose.model("user", userSchema)
module.exports = User
