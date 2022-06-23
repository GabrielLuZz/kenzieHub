import { StyledInput } from "./styles";

const Input = ({ label, ...rest }) => {
  return (
    <StyledInput>
      <span>{label}</span>
      <input {...rest} />
    </StyledInput>
  );
};

export default Input;
