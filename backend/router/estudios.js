//CONFIGURO LOS ROUTERS
const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const estudiosController = require("../controller/estudios");

//ROUTER DE AGREGAR HISTORIAL DE ESTUDIO
router.post(
  "/estudios/agregar",
  auth,
  estudiosController.agregarHistorialEstudios
);

//ROUTER DE ACTUALIZAR HISTORIAL DE ESTUDIOS
router.put(
  "/estudios/actualizar/:id",
  auth,
  estudiosController.actualizarInformacionEducativa
);

//ROUTER DE ELIMINAR HISTORIAL DE ESTUDIOS
router.delete(
  "/estudios/eliminar/:id",
  auth,
  estudiosController.eliminarHistorialEducativo
);

//ROUTER PARA OBTENER HISTORIAL EL HISTORIAL DE ESTUDIOS
router.get(
  "/estudios/historial/:id",
  auth,
  estudiosController.obtenerHistorialEducativo
);

//ROUTER PARA OBTENER LA INFORMACION DEL USUARIO SU HISTORIAL DE ESTUDIOS
router.get(
  "/estududios/historialUsuario/:id",
  auth,
  estudiosController.listarHistorialesEducativosDeUnaPersona
);

module.exports = router;
