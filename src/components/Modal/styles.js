import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(18, 18, 20, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 100%;
    max-width: 370px;
    display: flex;
    flex-direction: column;
    min-height: 340px;
    background-color: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }

  .modal__head {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    background-color: var(--grey-2);
    border-radius: 4px 4px 0px 0px;

    h2 {
      font-size: 17px;
      line-height: 24px;
      color: var(--grey-0);
    }

    button {
      font-family: "Nunito", sans-serif;
      font-weight: 600;
      font-size: 28px;
      line-height: 26px;
      color: var(--grey-1);
      background: transparent;
      border: none;
    }
  }

  .modal__body {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px 17px 32px 22px;
    gap: 23px;
    justify-content: space-between;
    align-items: center;
  }

  .warning {
    text-align: center;
  }
`;
