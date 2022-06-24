import Button from "../Button";
import { StyledModal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import api from "../../services/api";
import { toast } from "react-toastify";
import FormRegisterTech from "../FormRegisterTech";
import FormEditTech from "../FormEditTech";
import { useHistory } from "react-router-dom";

const Modal = ({ infoModal, updateUser, setAuthenticated }) => {
  const { type } = infoModal[0];

  const closeModal = () => {
    infoModal[0].setInfoModal([]);
  };

  const history = useHistory();

  const editTech = (data) => {
    const token = JSON.parse(localStorage.getItem("@Hub:token"));
    api
      .put(`users/techs/${infoModal[0].tech.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        infoModal[0].setInfoModal([]);
        updateUser();
        toast.success("Tecnologia editada!!!");
      });
  };

  const handleClickTrash = () => {
    const token = JSON.parse(localStorage.getItem("@Hub:token"));
    api
      .delete(`/users/techs/${infoModal[0].tech.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        infoModal[0].setInfoModal([]);
        updateUser();
        toast.success("Tecnologia excluida!!!");
      });
  };

  return (
    <StyledModal type={type}>
      <div className="modal">
        <div className="modal__head">
          <h2>{type}</h2>

          <button onClick={closeModal}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="modal__body">
          {type === "Cadastrar Tecnologia" && (
            <FormRegisterTech updateUser={updateUser} infoModal={infoModal} />
          )}

          {type === "Tecnologia Detalhes" && (
            <FormEditTech editTech={editTech} infoModal={infoModal} />
          )}

          {type === "Excluir Tecnologia" && (
            <div className="form">
              <h2 className="warning">
                Tem certeza que deseja excluir essa tecnologia?
              </h2>
              <Button handleClick={handleClickTrash} bg="red">
                Excluir
              </Button>
            </div>
          )}

          {type === "Sair" && (
            <div className="form">
              <h2 className="warning">Tem certeza que deseja Sair?</h2>
              <Button
                handleClick={() => {
                  history.push("/authenticate");
                  localStorage.removeItem("@Hub:token");
                  setAuthenticated(false);
                }}
                bg="grey"
              >
                Sair
              </Button>
            </div>
          )}
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
