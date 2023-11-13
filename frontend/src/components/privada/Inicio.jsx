import React, { useState, useEffect } from "react";
import UseAuth from "../../helpers/UseAuth";
import "../../assets/js/main";
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
  const { Autenticado } = UseAuth();

  return (
    <>
      <Header Autenticado={Autenticado} />
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>{Autenticado.nombre.toUpperCase()}</h1>
          <p>
            Soy experto en APIS y MER.
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
        </div>
      </section>

      <main id="main">
        <Estudio />
        <Sobre Autenticado={Autenticado} />
        <Hechos Autenticado={Autenticado} />
        <Habilidades />
        <Resumen Autenticado={Autenticado} />
        <Proyectos />
        <Servicies />
        <Testimonios Autenticado={Autenticado} />
        <Contacto Autenticado={Autenticado} />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Inicio;
