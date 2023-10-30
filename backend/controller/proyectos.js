const Proyecto = require("../models/Proyectos");

//CONTROLADOR DE AGREGAR NUEVO PROYECTO
const agregarNuevoProyecto = async (req, res) => {
  try {
    const datos = req.body;

    //VALIDAR QUE LOS DATOS NO ESTEN VACIOS
    if (!datos.nombre || !datos.detalle || !datos.link) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios",
        status: false,
      });
    }

    //CREO EL OBJETO DE ESTUDIOS
    const proyectoGuardado = new Proyecto(datos);

    //GUARDAR EL ESTUDIOS
    await proyectoGuardado.save();

    return res.status(200).json({
      resultado: "Inserción exitosa",
      status: true,
      datos: proyectoGuardado.toJSON(),
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR PARA ACTUALIZAR EL PROYECTO
const actualizarProyecto = async (req, res) => {
  try {
    const id = req.params.id;
    const nuevosDatos = req.body;

    //ACUTUALIZO LA CONSULTA
    const consulta = await Proyecto.findOneAndUpdate(
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
    return res.status(400).json({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR DE ELIMINAR PROYECTO
const eliminarProyecto = async (req, res) => {
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
    const consulta = await Proyecto.findOneAndDelete(id).exec();

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

//CONTROLAODR DE TENER DETALLES DEL PROYECTO
const obtenerDetallesDelProyecto = async (req, res) => {
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
    const consulta = await Proyecto.findById(id).exec();

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

//CONTROLAR DE PROYECTO DE UNA PERSONA
const listarProyectosDeUnaPersona = async (req, res) => {
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
    const consulta = await Proyecto.find({ persona_id: id }).exec();

    if (!consulta) {
      return res.status(404).json({
        mensaje: "No se encontró el usuario con el ID proporcionado",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Obtención exitosa",
      status: true,
      datos: consulta.map(resultado => resultado.toJSON()),
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en la consulta",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR LISTAR TODOS LOS PROYECTOS
const listarTodosLosProyectos = async (req, res) => {
  try {
    //CONSULTA TRAE TODA SU INFROAMCION PERSONAL
    const consulta = await Proyecto.find().exec();

    if (consulta.length === 0) {
      return res.status(404).json({
        mensaje: "No se encontraron registros de los proyectos",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Obtención exitosa",
      status: true,
      datos: consulta.map(proyectos => proyectos.toJSON()),
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
  agregarNuevoProyecto,
  actualizarProyecto,
  eliminarProyecto,
  obtenerDetallesDelProyecto,
  listarProyectosDeUnaPersona,
  listarTodosLosProyectos,
};
