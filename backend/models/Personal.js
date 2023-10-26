const { Schema, model } = require("mongoose");

const PersonalSchema = Schema(
  {
    apodo: {
      type: String,
      require: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    fechaNacimiento: {
      type: Date,
      default: Date.now,
    },
    direccion: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    telefono: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "personal" }
);

module.exports = model("personal", PersonalSchema, "personal");
