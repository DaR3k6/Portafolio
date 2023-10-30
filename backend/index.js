const express = require("express");
const cors = require("cors");
const conexion = require("./models/Conexion");
require("dotenv/config");

//CONECTO LA BASE DE DATOS
conexion();

//CREO EL SERVIDOR NODE
const app = express();
const puerto = process.env.PUERTO;

//CONEXION MIDDLEAWRE
app.use(cors());
app.use(express.json());

//RECIBIR BODY DE LOS FORMULARIOS
app.use(express.urlencoded({ extended: true }));

//RUTAS MVC
const rutaPersonal = require("./router/personal");
const rutaEstudio = require("./router/estudios");
const rutaProyecto = require("./router/proyectos");

app.use("/api/", rutaPersonal);
app.use("/api/", rutaEstudio);
app.use("/api/", rutaProyecto);

app.listen(puerto, () => {
  console.log(`El servidor está conectado en: http://localhost:${puerto}`);
});
