import Button from "../Button";
import Card from "../Card";
import { StyledList } from "./styles";

const List = () => {
  return (
    <StyledList>
      <div className="infoList">
        <h3>Tecnologias</h3>
        <Button isSmall bg="darkGrey">
          +
        </Button>
      </div>
      <div className="list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledList>
  );
};

export default List;
