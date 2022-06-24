import { StyledButton } from "./styles";

const Button = ({ bg, isSmall = false, children, handleClick, ...rest }) => {
  return (
    <StyledButton {...rest} onClick={handleClick} bg={bg} isSmall={isSmall}>
      {children}
    </StyledButton>
  );
};

export default Button;
