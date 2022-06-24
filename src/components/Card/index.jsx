import { StyledCard } from "./styles";

import { BsFillTrashFill } from "react-icons/bs";

const Card = () => {
  return (
    <StyledCard>
      <h4>React Js</h4>
      <div className="status">
        <span>Intermediário</span>
        <div>
          <BsFillTrashFill />
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
