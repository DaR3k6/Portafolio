//IMPORTAMOS LA LIBRERIA DE MONGOOSE
const mongoose = require("mongoose");

const conexion = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017:27017/portafolio");
  } catch (error) {
    console.log("No se ha podido el conectar la base de datos");
  }
};

module.exports = conexion;
