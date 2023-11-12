import { useContext } from "react";
import AuthContext from "../../src/components/context/AuthProvier";

const UseAuth = () => {
  console.log(AuthContext);
  return useContext(AuthContext);
};

export default UseAuth;
