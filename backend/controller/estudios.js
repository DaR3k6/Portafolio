const Estudios = require("../models/Estudios");

//CONTROLADOR DE AGREGAR HISTORIA DE ESTUDIOS
const agregarHistorialEstudios = async (req, res) => {
  try {
    const datos = req.body;

    //VALIDAR QUE LOS DATOS NO ESTEN VACIOS
    if (!datos.detalle || !datos.notas) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios",
        status: false,
      });
    }

    //CREO EL OBJETO DE ESTUDIOS
    const estudioGuardado = new Estudios(datos);

    //GUARDAR EL ESTUDIOS
    await estudioGuardado.save();

    return res.status(200).json({
      resultado: "Inserción exitosa",
      status: true,
      datos: estudioGuardado.toJSON(),
    });
  } catch (error) {
    return res.status(500).json({
      // <<<<<<< HEAD
      mensaje: "Error en la consulta",
      // =======
      mensaje: "Error en el servidor",
      // >>>>>>> 8d649c7181cb1c2f16c1a5f459bfc54ed40c2cbd
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR DE ACTUALIZAR HISTORIAL DE ESTUDIOS
const actualizarInformacionEducativa = async (req, res) => {
  try {
    const id = req.params.id;
    const nuevosDatos = req.body;

    //ACTUALIZO LA CONSULTA
    const consulta = await Estudios.findOneAndUpdate(
      { _id: id },
      nuevosDatos
    ).exec();

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
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR DE ELIMINAR HISTORIAL DE ESTUDIOS
const eliminarHistorialEducativo = async (req, res) => {
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
    const consulta = await Estudios.findOneAndDelete(id).exec();

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
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADRO PARA OBTENER HISTORIAL DE ESTUDIO
const obtenerHistorialEducativo = async (req, res) => {
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
    const consulta = await Estudios.findById(id).exec();

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
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR PARA LISTAR UNA PERSONA EL HISTORIAL DE  ESTUDIOS
const listarHistorialesEducativosDeUnaPersona = async (req, res) => {
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
    const consulta = await Estudios.find({ persona_id: id }).exec();

    if (!consulta) {
      return res.status(404).json({
        mensaje: "No se encontró el usuario con el ID proporcionado",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Obtención exitosa",
      status: true,
      datos: consulta.map((resultado) => resultado.toJSON()),
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

module.exports = {
  agregarHistorialEstudios,
  actualizarInformacionEducativa,
  eliminarHistorialEducativo,
  obtenerHistorialEducativo,
  listarHistorialesEducativosDeUnaPersona,
};
