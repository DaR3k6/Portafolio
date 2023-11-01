import React, { useState } from "react";
import img from "../assets/img/profile.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Header = () => {
  //CAPTURO VAIABLE NOMBRE DEL USUARIO
  let nombreUser = JSON.parse(localStorage.getItem("nombre"));
  //REDIRIGE
  const navigate = useNavigate();
  //ALERTA PARA CERRAR SESION
  const cerrarSesion = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Quieres salir de la pagina!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Salir!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sesion cerrada!", "Exitosamente.", "success");
        navigate("/");
      }
    });
  };

  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={img} alt="" className="img-fluid rounded-circle w-90" />
            <h1 className="text-light">
              <a href="index.html">{nombreUser.toUpperCase()}</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Inicio</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>Sobre Mi</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resumen</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Proyectos</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Servicios</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contacto</span>
                </a>
              </li>
              <li>
                <a href="#estudio" className="nav-link scrollto">
                  <i class="bi bi-bar-chart-line"></i> <span>Estudios</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={cerrarSesion}
                  style={{ cursor: "pointer" }}
                >
                  <i class="bi bi-box-arrow-right"></i>
                  <span>Cerrar Sesion</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
