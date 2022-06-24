import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0px 18px;
  /* filter: blur(8px); */
  header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 72px;

    h1 {
      color: var(--color-primary);
      font-size: 25px;
    }
  }

  .infoDev {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey-3);
    border-top: 1px solid var(--grey-3);

    h2 {
      font-size: 25px;
      line-height: 28px;
      color: var(--grey-0);
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: var(--grey-1);
    }
  }

  @media (max-width: 540px) {
    .infoDev {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;
