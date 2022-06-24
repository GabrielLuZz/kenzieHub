import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import FormLogin from "../../components/FormLogin";
import FormRegister from "../../components/FormRegister";
import { StyledAuthenticate } from "./styles";

const Authenticate = ({ authenticated, setAuthenticated }) => {
  const [onRegister, setOnRegister] = useState(false);

  if (authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <StyledAuthenticate>
      {onRegister ? (
        <FormRegister setOnRegister={setOnRegister} />
      ) : (
        <FormLogin
          setAuthenticated={setAuthenticated}
          isRegister={false}
          setOnRegister={setOnRegister}
        />
      )}
    </StyledAuthenticate>
  );
};

export default Authenticate;
