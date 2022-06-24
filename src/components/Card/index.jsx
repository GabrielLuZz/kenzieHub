import { StyledCard } from "./styles";

import { BsFillTrashFill } from "react-icons/bs";

const Card = ({ tech, setInfoModal, updateUser }) => {
  const openEdit = () => {
    setInfoModal([{ type: "Tecnologia Detalhes", setInfoModal, tech }]);
  };

  const openTrash = () => {
    setInfoModal([{ type: "Excluir Tecnologia", setInfoModal, tech }]);
  };

  const { title, status } = tech;
  return (
    <StyledCard>
      <div onClick={openEdit} className="title">
        <h4>{title}</h4>
      </div>
      <div className="status">
        <span>{status}</span>
        <div onClick={openTrash}>
          <BsFillTrashFill />
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
