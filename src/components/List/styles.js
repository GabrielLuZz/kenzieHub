import styled from "styled-components";

export const StyledList = styled.div`
  width: 100%;
  .infoList {
    height: 82px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: var(--grey-0);
      font-weight: 600;
      font-size: 20px;
    }

    button {
      font-size: 32px;
    }
  }

  .list {
    width: 100%;
    padding: 24px;
    min-height: 416px;
    background-color: var(--grey-3);
    border-radius: 4px;
  }
`;
