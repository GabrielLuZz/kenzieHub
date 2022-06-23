import { StyledButton } from "./styles";

const Button = ({ bg, isSmall = false, children, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} bg={bg} isSmall={isSmall}>
      {children}
    </StyledButton>
  );
};

export default Button;
