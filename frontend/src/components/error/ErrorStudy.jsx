import React from "react";

const ErrorStudy = () => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show d-flex align-items-center"
        role="alert"
        style={{
          backgroundColor: "#fff3cd",
          color: "#856404",
          border: "1px solid #ffeeba",
          borderRadius: "0.25rem",
          padding: "1rem",
          maxWidth: "300px",
          alignItems: "center",
          left: "10%",
          right: "20%",
        }}
      >
        <i
          className="bi bi-exclamation-triangle-fill"
          style={{ fontSize: "3.5rem", marginRight: "1rem" }}
        ></i>
        <div className="text-center">
          <strong>¡Advertencia!</strong> No hay Estudios agregados.
        </div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          style={{ marginLeft: "auto" }}
        ></button>
      </div>
    </>
  );
};

export default ErrorStudy;
