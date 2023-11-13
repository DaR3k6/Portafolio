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
<<<<<<< HEAD
      {/* <Header /> */}
=======
      <Header Autenticado={Autenticado} />
>>>>>>> f4cba80ea7115efaf4609464d43d63af9ef826c6
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>{Autenticado.nombre}</h1>
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
<<<<<<< HEAD
        {/* <Estudio />
        <Sobre />
        <Hechos />
=======
        <Estudio />
        <Sobre Autenticado={Autenticado} />
        <Hechos Autenticado={Autenticado} />
>>>>>>> f4cba80ea7115efaf4609464d43d63af9ef826c6
        <Habilidades />
        <Resumen Autenticado={Autenticado} />
        <Proyectos />
        <Servicies />
<<<<<<< HEAD
        <Testimonios />
        <Contacto /> */}
      </main>
      <footer id="footer">{/* <Footer /> */}</footer>

      {/* modales */}

      {/* edicion productos modal */}
=======
        <Testimonios Autenticado={Autenticado} />
        <Contacto Autenticado={Autenticado} />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
>>>>>>> f4cba80ea7115efaf4609464d43d63af9ef826c6
    </>
  );
};

export default Inicio;
