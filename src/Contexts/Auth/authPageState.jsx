import AuthPageContext from "./authPageContext";
import { useState } from "react";

const AuthPageState = (props) => {
  const [state, setState] = useState(1);
  const update = (newState) => {
    setState(newState);
  };
  return (
    <AuthPageContext.Provider value={{ state, update }}>
      {props.children}
    </AuthPageContext.Provider>
  );
};

export default AuthPageState;
