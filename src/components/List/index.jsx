import Button from "../Button";
import Card from "../Card";
import { StyledList } from "./styles";

const List = ({ list, setInfoModal, updateUser }) => {
  const openAdd = () => {
    setInfoModal([{ type: "Cadastrar Tecnologia", setInfoModal }]);
  };

  return (
    <StyledList>
      <div className="infoList">
        <h3>Tecnologias</h3>
        <Button handleClick={openAdd} isSmall bg="darkGrey">
          +
        </Button>
      </div>
      <div className="list">
        {list?.map((item) => (
          <Card
            key={item.id}
            updateUser={updateUser}
            tech={item}
            setInfoModal={setInfoModal}
          />
        ))}

        {list.length === 0 && <div>sem tecnologias</div>}
      </div>
    </StyledList>
  );
};

export default List;
