import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";

const Routing = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

export default Routing;
