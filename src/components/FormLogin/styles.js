import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }

`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 370px;
  gap: 20px;
  display: flex;
  flex-direction: column;

  animation: ${appearFromRight} 1s;

  .head {
    width: 100%;
    display: flex;
    justify-content: center;

    align-items: center;
    h1 {
      color: var(--color-primary);
      font-size: 20px;
    }
  }

  .form {
    width: 100%;
    min-height: 500px;
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 42px 22px;
    gap: 22px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    small {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: var(--grey-1);
    }

    .question {
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: var(--grey-1);
    }

    h2 {
      font-size: 18px;
      color: #f8f9fa;
    }
  }
`;
