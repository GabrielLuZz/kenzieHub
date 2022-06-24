import styled from "styled-components";

export const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;

  .error {
    color: var(--color-primary-negative);
    margin-top: 10px;
  }

  input {
    width: 100%;
    height: 48px;
    padding: 0px 16px;
    background-color: var(--grey-2);
    border: 1.2182px solid var(--grey-2);
    border-radius: 4px;
    font-weight: 400;
    font-size: 16.2426px;
    color: var(--grey-0);
    margin-top: 14px;

    &::placeholder {
      color: var(--grey-1);
    }

    &:focus {
      border-color: var(--grey-0);
    }
  }
`;
