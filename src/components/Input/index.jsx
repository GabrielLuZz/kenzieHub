import { StyledInput } from "./styles";
import { RiErrorWarningFill } from "react-icons/ri";

const Input = ({ label, register, error, name, ...rest }) => {
  return (
    <StyledInput>
      <span>{label}</span>
      <input {...register(name)} {...rest} />
      {error?.message && (
        <div className="error">
          <RiErrorWarningFill /> {error.message}
        </div>
      )}
    </StyledInput>
  );
};

export default Input;
