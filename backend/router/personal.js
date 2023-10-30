//CONFIGURO LOS ROUTERS
const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const personalController = require("../controller/personal");

//ROUTER REGISTRO EL USUARIO
router.post("/personal/registrando", personalController.personalRegistrar);

//ROUTER LOGEO EL USUARIO
router.post("/personal/login", personalController.personalLogin);

//ROUTER ACTUALIZAR USUARIO
router.put(
  "/personal/actualizar/:id",
  auth,
  personalController.personalActualizar
);

//ROUTER ELIMINO EL USUARIO
router.delete(
  "/personal/eliminar/:id",
  auth,
  personalController.eliminarUsuario
);

//ROUTER OBTENGO LA INFORMACION PERSONAL
router.get(
  "/personal/informacion/:id",
  auth,
  personalController.obtenerInformacionPersonal
);

//ROUTER LISTA TODOS LOS REGISTROS PERSONALES
router.get("/personal", auth, personalController.registrarRegistrosPersonales);

module.exports = router;
