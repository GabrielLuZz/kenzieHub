import Button from "../Button";
import FalseSelect from "../FalseSelect";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormEditTech = ({ editTech, infoModal }) => {
  const schema = yup.object().shape({
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { tech } = infoModal[0];

  return (
    <form
      onSubmit={handleSubmit((data) => {
        editTech(data);
      })}
      className="form"
    >
      <Input type="text" label="Nome" disabled value={tech.title} />

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
        value={tech.status}
      />

      <Button type="submit" bg="red">
        Salvar alterações
      </Button>
    </form>
  );
};

export default FormEditTech;
