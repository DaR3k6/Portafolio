import React, { useState } from "react";
import img1 from "../assets/img/fondostudy.png";
import img2 from "../assets/img/fondo2.png";
import HelperForm from "../helpers/HelperForm";
import { Global } from "../helpers/Global";
import Swal from "sweetalert2";
const Estudio = () => {
  const { form, cambiar } = HelperForm({});
  const [, setGuardado] = useState("");
  //MENSAJE DE LOS CAMPOS VACIOS
  const mostrarCamposVaciosAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Campos Vacíos",
      text: "Por favor complete todos los campos obligatorios.",
    });
  };

  //MENSAJE DE ERROR
  const mostrarErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  };

  //VALIDACION DE LOS CAMPOS VACIOS
  const validarFormulario = () => {
    if (!form.tipo || !form.detalle || !form.fechaFin) {
      mostrarCamposVaciosAlert();
      return false;
    }
    return true;
  };

  //GUARDA LA INSERCION DE LOS ESTUDIOS
  const guardarEstudio = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    let nuevoEstudio = form;

    try {
      const request = await fetch(Global.url + "/estudios/agregar", {
        method: "POST",
        body: JSON.stringify(nuevoEstudio),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await request.json();
      if (data.status === true) {
        //MENSAJE EXITOSO
        console.log(data);
        setGuardado("Guardado");
        Swal.fire({
          icon: "success",
          title: "Estudio Agregado exitosamente",
          text: "¡Tu estudio a sido Agregado!",
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {});
      } else {
        //MENSAJE DE ERROR
        setGuardado("Error");
        mostrarErrorAlert(data.mensaje);
      }
    } catch (error) {
      //MENSAJE SI HAY PROBLEMA DEL SERVIDOR
      mostrarErrorAlert(
        "Algo salió mal. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };
  return (
    <>
      <section id="estudio" className="estudio">
        <div className="container">
          <div className="section-title">
            <h2>
              Agregar Estudios<i class="bi bi-highlighter"></i>
            </h2>
            <p>
              En esta seccion podras agregar los estudios que has cursado a lo
              largo de tu carrera para que las demas personas lo vean y puedan
              llamarte y contratarte para un proyecto que ellos tengan y fianzar
              un contraro.
            </p>
          </div>

          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info w-100 tex-center">
                <img src={img1} alt="" className="img-fluid " />
                <img src={img2} alt="" className="img-fluid " />
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
                onSubmit={guardarEstudio}
              >
                <div className="form-group">
                  <label htmlFor="name">Tipo del Estudio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tipo"
                    id="subject"
                    required
                    onChange={cambiar}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Detalles</label>
                  <textarea
                    className="form-control"
                    name="detalle"
                    rows="10"
                    required
                    onChange={cambiar}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Fecha de Finalizacion</label>
                  <input
                    type="date"
                    className="form-control"
                    name="fechaFin"
                    id="subject"
                    required
                    onChange={cambiar}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Notas</label>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label="Large select example"
                    name="notas"
                    onChange={cambiar}
                  >
                    <option value="1">Aprobado</option>
                    <option value="2">No Aprovado</option>
                    <option value="2">En Proceso</option>
                  </select>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Agregar Estudio</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Estudio;
