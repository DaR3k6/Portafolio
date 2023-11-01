import React, { useState, useEffect } from "react";
import "../assets/js/main";
//IMPORTAMOS TODOS LOS COMPONENTES DE LA PAGINA
import Header from "./Header";
import Estudio from "./Estudio";
import Sobre from "./Sobre";
import Hechos from "./Hechos";
import Habilidades from "./Habilidades";
import Resumen from "./Resumen";
import Proyectos from "./Proyectos";
import Servicies from "./Servicies";
import Testimonios from "./Testimonios";
import Contacto from "./Contacto";
import Footer from "./Footer";
const Inicio = () => {
  //CAPTURAMOS EL ID USUARIOS
  // const [datos,setDatos] = useState(
  // []
  // )
  // useEffect(() => {
  //   const token = Json.parse(localStorage.getItem("token"));
  //   console.log(token);
  // });
  let nombreUser = JSON.parse(localStorage.getItem("nombre"));
  return (
    <>
      <Header />
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>{nombreUser.toUpperCase()}</h1>
          <p>
            Soy Experto en Apis y MER.
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
        </div>
      </section>

      <main id="main">
        <Estudio />
        <Sobre />
        <Hechos />
        <Habilidades />
        <Resumen />
        <Proyectos />
        <Servicies />
        <Testimonios />
        <Contacto />
      </main>
      <footer id="footer">
        <Footer />
      </footer>

      {/* modales */}

      {/* edicion productos modal */}
    </>
  );
};

export default Inicio;
