const Personal = require("../models/Personal");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//CONTROLADOR DE REGISTRAR USUARIO
const personalRegistrar = async (req, res) => {
  try {
    const datos = req.body;

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
    const datos = req.body;

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

//CONTROLADOR ACTUALIZAR LOS DATOS PEROSONAL
const personalActualizar = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    //ENCRYPTO LA CONTRASEÑA SI QUIERE CAMBIAR EL USUARIO
    if (data.password) {
      const hashedPassword = await bycrpt.hash(data.password, 10);
      data.password = hashedPassword;
    }

    //ACTUALIZO LA CONSULTA
    const consulta = await Personal.findOneAndUpdate({ _id: id }, data).exec();

    if (!consulta) {
      return res.status(404).json({
        mensaje: "No se encontró el registro con el ID proporcionado",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Actualizar exitoso",
      status: true,
      datos: consulta.toJSON(),
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR DE ELIMINAR UNA USUARIO
const eliminarUsuario = async (req, res) => {
  try {
    const id = req.params.id;

    //VEREFICO SI EXISTE EL ID
    if (!id) {
      return res.status(400).json({
        mensaje: "ID de usuario no válido",
        status: false,
      });
    }

    //HACE LA CONSULTA SI SE PUEDE ELIMINAR
    const consulta = await Personal.findOneAndDelete(id).exec();

    if (!consulta) {
      return res.status(404).json({
        mensaje: "No se encontró el usuario con el ID proporcionado",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Elimino exitoso",
      status: true,
      datos: consulta.toJSON(),
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR DE OBTENER LA INFORMACION DEL USUARIO
const obtenerInformacionPersonal = async (req, res) => {
  try {
    const id = req.params.id;

    //VEREFICO SI EXISTE EL ID
    if (!id) {
      return res.status(400).json({
        mensaje: "ID de usuario no válido",
        status: false,
      });
    }

    //HACE LA CONSULTA OBTENER LA INFROMACION PERSONAL
    const consulta = await Personal.findById(id).exec();

    if (!consulta) {
      return res.status(404).json({
        mensaje: "No se encontró el usuario con el ID proporcionado",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Obtención exitosa",
      status: true,
      datos: consulta.toJSON(),
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

//REGISTRAR TODOS LOS REGISTROS PERSONALES
const registrarRegistrosPersonales = async (req, res) => {
  try {
    //CONSULTA TRAE TODA SU INFROAMCION PERSONAL
    const consulta = await Personal.find().exec();

    if (consulta.length === 0) {
      return res.status(404).json({
        mensaje: "No se encontraron registros personales",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Obtención exitosa",
      status: true,
      datos: consulta.map(personal => personal.toJSON()),
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

module.exports = {
  personalRegistrar,
  personalLogin,
  personalActualizar,
  eliminarUsuario,
  obtenerInformacionPersonal,
  registrarRegistrosPersonales,
};
