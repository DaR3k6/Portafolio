//CONFIGURO LOS ROUTERS
const express = require("express");
const router = express.Router();
const personalController = require("../controller/personal");

//REGISTRO EL USUARIO
router.post("/personal/registrando", personalController.personalRegistrar);

//LOGEO EL USUARIO
router.post("/personal/login", personalController.personalLogin);

module.exports = router;
