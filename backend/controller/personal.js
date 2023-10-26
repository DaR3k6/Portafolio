const Personal = require("../models/Personal");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const personalRegistrar = async (req, res) => {
  try {
    let datos = req.body;

    //CREO EL OBJETO
    const personalGuardar = new Personal(datos);

    //CONTROLO DE USUARIOS DUPLICADOS
    const consulta = await Personal.find({
      $or: [
        {
          apodo: personalGuardar.apodo.toLowerCase(),
          nombre: personalGuardar.nombre.toLowerCase(),
          apellido: personalGuardar.apellido.toLowerCase(),
          dirección: personalGuardar.dirección.toLowerCase(),
          email: personalGuardar.email.toLowerCase(),
        },
      ],
    }).exec();

    //VERIFICO LA CADENA DE TEXTO
    if (consulta.length > 0) {
      return res.status(400).json({
        mensaje: "Error ya existe el email o el apodo",
        error: error.mensaje,
        status: false,
      });
    } else {
      //ENCRYPTO LA CONTRASEÑA
      const password = await bycrpt.hash(personalGuardar.password, 10);
      personalGuardar.password = password;
      personalGuardar.save();

      return res.status(200).json({
        mensaje: "Inserto Correctamente",
        status: true,
        datos: datos.datos,
      });
    }
  } catch (error) {
    return res.status(404).send({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

module.exports = { personalRegistrar };
