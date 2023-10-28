//CONFIGURO LOS ROUTERS
const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const personalController = require("../controller/personal");

//REGISTRO EL USUARIO
router.post("/personal/registrando", personalController.personalRegistrar);

//LOGEO EL USUARIO
router.post("/personal/login", personalController.personalLogin);

//ACTUALIZAR USUARIO
router.put(
  "/personal/actualizar/:id",
  auth,
  personalController.personalActualizar
);

//ELIMINO EL USUARIO
router.delete(
  "/personal/eliminar/:id",
  auth,
  personalController.eliminarUsuario
);

module.exports = router;
