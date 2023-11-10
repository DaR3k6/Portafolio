import React, { useState } from "react";
import Swal from "sweetalert2";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";

const ModalAgregar = () => {
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
    if (!form.nombre || !form.detalle || !form.link) {
      mostrarCamposVaciosAlert();
      return false;
    }
    return true;
  };
  //GUARDA LA INSERCION DE LOS PROYECTOS
  const guardarProyecto = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    let nuevoProyecto = form;

    try {
      const request = await fetch(Global.url + "/proyecto/agregar", {
        method: "POST",
        body: JSON.stringify(nuevoProyecto),
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
          title: "Proyecto Agregado exitosamente",
          text: "¡Tu Proyecto a sido Agregado!",
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {
          proyectoAgregado();
        });
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
      <div
        class="modal fade"
        id="proyecto1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <form onSubmit={guardarProyecto}>
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Agregar Proyecto <i class="bi bi-folder-plus"></i>
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    📚
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre Proyecto"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="nombre"
                    onChange={cambiar}
                  />
                </div>
                <div class="input-group mb-3">
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextareaDisabled"
                      name="detalle"
                      onChange={cambiar}
                    ></textarea>
                    <label for="floatingTextareaDisabled">
                      Detalles del Proyecto
                    </label>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <label for="basic-url" class="form-label">
                    Ingresa tu URL
                  </label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">
                      https://
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3 basic-addon4"
                      name="link"
                      onChange={cambiar}
                    />
                  </div>
                  <div class="form-text" id="basic-addon4">
                    Sitio de tu proyecto.
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalAgregar;
