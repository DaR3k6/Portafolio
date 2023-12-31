//CONFIGURO LOS ROUTERS
const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const proyectoController = require("../controller/proyectos");

//ROUTER DE AGREGAR NUEVO PROYECTO
router.post("/proyecto/agregar", auth, proyectoController.agregarNuevoProyecto);

//ROUTER DE ACTUALIZAR PROYECTO TOKEN!
router.put(
  "/proyecto/actualizar/:id",
  auth,
  proyectoController.actualizarProyecto
);

//ROUTER DE ELIMINAR PROYECTO TOKEN!
router.delete(
  "/proyecto/eliminar/:id",
  auth,
  proyectoController.eliminarProyecto
);

//ROUTER DE OBTENER DETALLES DEL PROYECTO TOKEN!
router.get(
  "/proyecto/detalles/:id",
  auth,
  proyectoController.obtenerDetallesDelProyecto
);

//ROUTER DE LISTAR EL PROYECTO DE LA PERSONA TOKEN!
router.get(
  "/proyecto/listar/:id",
  auth,
  proyectoController.listarProyectosDeUnaPersona
);

//ROUTER DE MOSTRAR TODOS LOS PROYECTOS TOKEN!
router.get("/proyectos", auth, proyectoController.listarTodosLosProyectos);

module.exports = router;
