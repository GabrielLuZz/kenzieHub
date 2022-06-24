import { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import List from "../../components/List";
import Modal from "../../components/Modal";
import api from "../../services/api";
import { StyledHome } from "./styles";

const Home = ({ authenticated, setAuthenticated }) => {
  const user = JSON.parse(localStorage.getItem("@Hub:user"));
  const [infoModal, setInfoModal] = useState([]);
  const [list, setList] = useState(user.techs || []);

  const updateUser = () => {
    api.get(`users/${user.id}`).then((response) => {
      setList(response.data.techs);
      localStorage.setItem("@Hub:user", JSON.stringify(response.data));
    });
  };

  if (!authenticated) {
    return <Redirect to="/authenticate" />;
  }

  return (
    <>
      <StyledHome infoModal={infoModal}>
        <header>
          <h1>Kenzie Hub</h1>
          <Button
            handleClick={() => {
              setInfoModal([{ type: "Sair", setInfoModal }]);
            }}
            isSmall
            bg="darkGrey"
          >
            Sair
          </Button>
        </header>
        <section className="infoDev">
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </section>
        <List updateUser={updateUser} setInfoModal={setInfoModal} list={list} />
      </StyledHome>

      {!!infoModal.length && (
        <Modal
          infoModal={infoModal}
          setAuthenticated={setAuthenticated}
          updateUser={updateUser}
        />
      )}
    </>
  );
};

export default Home;
