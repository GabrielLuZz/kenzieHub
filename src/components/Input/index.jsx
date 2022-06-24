import { StyledInput } from "./styles";
import { RiErrorWarningFill } from "react-icons/ri";

const Input = ({ label, register = false, error, name, ...rest }) => {
  return (
    <StyledInput>
      <span>{label}</span>
      {register === false ? (
        <input {...rest} />
      ) : (
        <input {...register(name)} {...rest} />
      )}
      {error?.message && (
        <div className="error">
          <RiErrorWarningFill /> {error.message}
        </div>
      )}
    </StyledInput>
  );
};

export default Input;
