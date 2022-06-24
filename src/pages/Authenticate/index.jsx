import { useState } from "react";
import FormLogin from "../../components/FormLogin";
import FormRegister from "../../components/FormRegister";
import { StyledAuthenticate } from "./styles";

const Authenticate = () => {
  const [onRegister, setOnRegister] = useState(false);
  return (
    <StyledAuthenticate>
      {onRegister ? (
        <FormRegister setOnRegister={setOnRegister} />
      ) : (
        <FormLogin isRegister={false} setOnRegister={setOnRegister} />
      )}
    </StyledAuthenticate>
  );
};

export default Authenticate;
