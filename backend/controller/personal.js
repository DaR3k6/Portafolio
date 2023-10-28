const Personal = require("../models/Personal");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//CONTROLADOR DE REGISTRAR USUARIO
const personalRegistrar = async (req, res) => {
  try {
    let datos = req.body;

    //CREA EL USUARIO DEL OBJETO
    const personalGuardar = new Personal(datos);

    //VEREFICA SI HAY USUARIOS DUBLICADOS
    const consulta = await Personal.find({
      $or: [
        {
          apodo: personalGuardar.apodo.toLowerCase(),
          nombre: personalGuardar.nombre.toLowerCase(),
          apellido: personalGuardar.apellido.toLowerCase(),
          email: personalGuardar.email.toLowerCase(),
          genero: personalGuardar.genero.toLowerCase(),
        },
      ],
    }).exec();

    if (consulta.length > 0) {
      return res.status(400).json({
        mensaje: "Error: ya existe el email o el apodo",
        status: false,
      });
    } else {
      //ENCRYPTO LA CONTRASEÑA
      const password = await bycrpt.hash(personalGuardar.password, 10);
      personalGuardar.password = password;

      //GUARDAR EL USUARIO
      await personalGuardar.save();

      return res.status(200).json({
        mensaje: "Registro exitoso",
        status: true,
        datos: personalGuardar.toJSON(),
      });
    }
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR DE LOGIN
const personalLogin = async (req, res) => {
  try {
    let datos = req.body;

    //VALIDAR LA PRESENCIA DE EMAIL Y CONTRASEÑA
    if (!datos.email || !datos.password) {
      return res.status(400).json({
        resultado: "error",
        mensaje: "Faltan datos por enviar del formulario",
      });
    }

    //BUSCAMOS EL USUARIO POR MEDIO DE EMAIL
    const consulta = await Personal.findOne({ email: datos.email }).exec();

    if (!consulta) {
      return res.status(400).json({
        resultado: "error",
        mensaje: "Usuario no existe en la BD",
      });
    } else {
      //COMPARAR LA CONTRASEÑA ALMACENADA
      const pwdCoincide = await bycrpt.compare(
        datos.password,
        consulta.password
      );

      if (!pwdCoincide) {
        return res.status(400).json({
          resultado: "error",
          mensaje: "Contraseña incorrecta",
        });
      }

      //CREO EL TOKEN DE AUTENTICACION
      const token = jwt.sign(
        {
          userId: consulta._id,
          email: consulta.email,
        },
        process.env.SECRETO,
        {
          expiresIn: "1d",
        }
      );

      return res.status(200).json({
        resultado: "success",
        mensaje: "Inicio de sesión exitoso",
        usuario: {
          id: consulta._id,
          email: consulta.email,
          token: token,
        },
      });
    }
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

module.exports = { personalRegistrar, personalLogin };
