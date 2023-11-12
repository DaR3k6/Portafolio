import React from "react";

const Error = () => {
  return (
    <>
      <h1>404 Error Page </h1>
      <p className="zoom-area">
        <b>Error</b> Url no encontrada.{" "}
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <a target="_blank" href="#" className="more-link">
          Visit the original article
        </a>
      </div>
    </>
  );
};

export default Error;
