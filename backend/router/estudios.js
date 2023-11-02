//CONFIGURO LOS ROUTERS
const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const estudiosController = require("../controller/estudios");

//ROUTER DE AGREGAR HISTORIAL DE ESTUDIO TOKEN!
router.post("/estudios/agregar", estudiosController.agregarHistorialEstudios);

//ROUTER DE ACTUALIZAR HISTORIAL DE ESTUDIOS TOKEN!
router.put(
  "/estudios/actualizar/:id?",
  estudiosController.actualizarInformacionEducativa
);

//ROUTER DE ELIMINAR HISTORIAL DE ESTUDIOS TOKEN!
router.delete(
  "/estudios/eliminar/:id",
  estudiosController.eliminarHistorialEducativo
);

//ROUTER PARA OBTENER HISTORIAL EL HISTORIAL DE ESTUDIOS TOKEN!
router.get("/estudios/historial", estudiosController.obtenerHistorialEducativo);

//ROUTER PARA OBTENER LA INFORMACION DEL USUARIO SU HISTORIAL DE ESTUDIOS TOKEN!
router.get(
  "/estududios/historialUsuario",
  estudiosController.listarHistorialesEducativosDeUnaPersona
);

module.exports = router;
