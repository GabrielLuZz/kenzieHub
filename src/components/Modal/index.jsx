import Button from "../Button";
import Input from "../Input";
import FalseSelect from "../Select";
import { StyledModal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ type }) => {
  let title;

  return (
    <StyledModal>
      <div className="modal">
        <div className="modal__head">
          <h2>{type}</h2>

          <button>
            <AiOutlineClose />
          </button>
        </div>
        <div className="modal__body">
          {type === "Cadastrar Tecnologia" && (
            <>
              <Input
                type="text"
                label="Nome"
                placeholder="Digite aqui a tecnologia"
              />

              <FalseSelect
                label="Status"
                selectOptions={["Iniciante", "Intermediário", "Avançado"]}
              />

              <Button bg="pink">Cadastrar Tecnologia</Button>
            </>
          )}

          {type === "Tecnologia Detalhes" && (
            <>
              <Input
                type="text"
                label="Nome"
                placeholder="Digite aqui a tecnologia"
              />

              <FalseSelect
                label="Status"
                selectOptions={["Iniciante", "Intermediário", "Avançado"]}
              />

              <Button bg="red">Salvar alterações</Button>
            </>
          )}

          {type === "Excluir Tecnologia" && (
            <>
              <h2 className="warning">
                Tem certeza que deseja excluir essa tecnologia?
              </h2>
              <Button bg="red">Excluir</Button>
            </>
          )}

          {type === "Sair" && (
            <>
              <h2 className="warning">Tem certeza que deseja Sair?</h2>
              <Button bg="grey">Sair</Button>
            </>
          )}
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
