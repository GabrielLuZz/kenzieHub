import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg);
  border-radius: 4px;
  padding: 13px 22px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all ease 0.5s;

  &:hover {
    transform: scaleY(1.3);
  }
  h4 {
    font-size: 17px;
    color: var(--white);
  }

  .status {
    display: flex;
    align-items: center;

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: var(--grey-1);
      margin-right: 25px;
    }

    div {
      color: rgba(255, 255, 255, 0.8);
      transition: all ease 0.5s;

      &:hover {
        transform: translateY(-4px);
      }
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 20px;
    height: 100px;
    .status {
      width: 100%;
      justify-content: space-between;
    }
  }
`;
