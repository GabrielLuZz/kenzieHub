import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  ${(props) =>
    props.isSmall &&
    css`
      max-width: 68px;
    `}

  height: ${({ isSmall }) => (isSmall ? "40px" : "48px")};
  min-height: ${({ isSmall }) => (isSmall ? "40px" : "48px")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) =>
    bg === "pink"
      ? "var(--color-primary)"
      : bg === "lightGrey"
      ? "var(--grey-1)"
      : bg === "red"
      ? "var(--color-primary-negative)"
      : bg === "darkGrey"
      ? "var(--grey-3)"
      : ""};

  color: ${({ bg }) =>
    bg === "pink"
      ? "var(--white)"
      : bg === "lightGrey"
      ? "var(--grey-0)"
      : bg === "red"
      ? "var(--white)"
      : bg === "darkGrey"
      ? "var(--grey-0)"
      : ""};

  border: 1.2182px solid;
  border-color: ${({ bg }) =>
    bg === "pink"
      ? "var(--color-primary)"
      : bg === "lightGrey"
      ? "var(--grey-1)"
      : bg === "red"
      ? "var(--color-primary-negative)"
      : bg === "darkGrey"
      ? "var(--grey-3)"
      : ""};

  border-radius: 4px;

  transition: all ease 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  font-size: ${({ isSmall }) => (isSmall ? "12px" : "16px")};
  font-weight: ${({ isSmall }) => (isSmall ? "600" : "500")};
`;
