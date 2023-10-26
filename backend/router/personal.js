//CONFIGURO LOS ROUTERS
const express = require("express");
const router = express.Router();
const personalController = require("../controller/personal");

//REGISTRO EL USUARIO
router.post("/personal/registrado", personalController.personalRegistrar);

module.exports = router;
