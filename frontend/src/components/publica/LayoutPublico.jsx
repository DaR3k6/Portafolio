import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";

const LayoutPublico = () => {
  const { Autenticado } = UseAuth();
  console.log("Layout Publico", Autenticado);
  return <>{!Autenticado.id ? <Outlet /> : <Navigate to="/Bienvenida" />}</>;
};

export default LayoutPublico;
