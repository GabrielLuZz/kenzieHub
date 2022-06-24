import Button from "../Button";
import Input from "../Input";
import { StyledForm } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const FormLogin = ({ setOnRegister, setAuthenticated, authenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "minímo de 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
        "a senha precisa conter pelos menos um caracter maiúsculo, outro minúsculo, um número e um caracter especial"
      ),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("sessions", data)
      .then((response) => {
        const { user, token } = response.data;

        localStorage.setItem("@Hub:token", JSON.stringify(token));
        localStorage.setItem("@Hub:user", JSON.stringify(user));

        setAuthenticated(true);
        toast.success("Login feito com sucesso!");

        return history.push("/");
      })
      .catch((_) => {
        toast.error("Email ou senha incorretos");
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
      <div className="head">
        <h1>Kenzie Hub</h1>
      </div>

      <div className="form">
        <h2> Login</h2>

        <Input
          register={register}
          name="email"
          error={errors?.email}
          type="text"
          label="Email"
          placeholder="Digite aqui seu email"
        />
        <Input
          register={register}
          name="password"
          error={errors?.password}
          type="password"
          label="Senha"
          placeholder="Digite aqui sua senha"
        />

        <Button type="submit" bg="pink">
          Entrar
        </Button>
        <span className="question">Ainda não possui uma conta?</span>
        <Button
          handleClick={(e) => {
            e.preventDefault();
            setOnRegister(true);
          }}
          bg="lightGrey"
        >
          Cadastre-se
        </Button>
      </div>
    </StyledForm>
  );
};

export default FormLogin;
