import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";

const LayoutPublico = () => {
  const { Autenticado } = UseAuth();

  return (
    <>{!Autenticado.id ? <Outlet /> : <Navigate to="/portafolioPersonal" />}</>
  );
};

export default LayoutPublico;
