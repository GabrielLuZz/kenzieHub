import Button from "../../components/Button";
import List from "../../components/List";
import Modal from "../../components/Modal";
import { StyledHome } from "./styles";

const Home = () => {
  return (
    <>
      <StyledHome>
        <header>
          <h1>Kenzie Hub</h1>
          <Button isSmall bg="darkGrey">
            Sair
          </Button>
        </header>
        <section className="infoDev">
          <h2>Olá, Samuel Leão</h2>
          <span>Primeiro módulo (Introdução ao Frontend)</span>
        </section>
        <List />
      </StyledHome>

      {/* <Modal type="Sair" /> */}
    </>
  );
};

export default Home;
