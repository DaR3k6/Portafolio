//CONFIGURO LOS ROUTERS
const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const proyectoController = require("../controller/proyectos");

//ROUTER DE AGREGAR NUEVO PROYECTO
router.post("/proyecto/agregar", auth, proyectoController.agregarNuevoProyecto);

//ROUTER DE ACTUALIZAR PROYECTO
router.put(
  "/proyecto/actualizar/:id",
  auth,
  proyectoController.actualizarProyecto
);

//ROUTER DE ELIMINAR PROYECTO
router.delete(
  "/proyecto/eliminar/:id",
  auth,
  proyectoController.eliminarProyecto
);

//ROUTER DE OBTENER DETALLES DEL PROYECTO
router.get(
  "/proyecto/detalles/:id",
  auth,
  proyectoController.obtenerDetallesDelProyecto
);

//ROUTER DE LISTAR EL PROYECTO DE LA PERSONA
router.get(
  "/proyecto/listar/:id",
  auth,
  proyectoController.listarProyectosDeUnaPersona
);

//ROUTER DE MOSTRAR TODOS LOS PROYECTOS
router.get("/proyectos", auth, proyectoController.listarTodosLosProyectos);

module.exports = router;
