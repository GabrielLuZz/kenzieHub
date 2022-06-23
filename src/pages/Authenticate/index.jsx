import { useState } from "react";
import Form from "../../components/Form";
import { StyledAuthenticate } from "./styles";

const Authenticate = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <StyledAuthenticate>
      <Form isRegister={isRegister} setIsRegister={setIsRegister} />
    </StyledAuthenticate>
  );
};

export default Authenticate;
