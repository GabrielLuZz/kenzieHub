import Button from "../Button";
import FalseSelect from "../FalseSelect";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const FormRegisterTech = ({ infoModal, updateUser }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Tech obrigatória"),
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addNewTech = (data) => {
    const token = JSON.parse(localStorage.getItem("@Hub:token"));

    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        infoModal[0].setInfoModal([]);
        updateUser();
        toast.success("Tecnologia criada!!!");
      });
  };
  return (
    <form onSubmit={handleSubmit(addNewTech)} className="form">
      <Input
        register={register}
        name="title"
        type="text"
        error={errors?.title}
        label="Nome"
        placeholder="Digite aqui a tecnologia"
      />

      <FalseSelect
        register={register}
        name="status"
        error={errors?.status}
        label="Status"
        selectOptions={[
          ["Iniciante", "Iniciante"],
          ["Intermediário", "Intermediário"],
          ["Avançado", "Avançado"],
        ]}
      />

      <Button type="submit" bg="pink">
        Cadastrar Tecnologia
      </Button>
    </form>
  );
};

export default FormRegisterTech;
