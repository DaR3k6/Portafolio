const express = require("express");
const cors = require("cors");
const conexion = require("./models/Conexion");

//CONECTO LA BASE DE DATOS
conexion();

//CREO EL SERVIDOR NODE
const app = express();
const puerto = 3900;

//CONEXION MIDDLEAWRE
app.use(cors());
app.use(express.json());

//RECIBIR BODY DE LOS FORMULARIOS
app.use(express.urlencoded({ extended: true }));

//RUTAS MVC
const rutaPersonal = require("./router/personal");

app.use("/api/", rutaPersonal);


app.use(puerto, () => {
  console.log(`El servidor está conectado en: http://localhost:${puerto}`);
});
