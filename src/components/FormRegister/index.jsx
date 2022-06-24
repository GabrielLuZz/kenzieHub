import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import FalseSelect from "../Select";
import { StyledForm } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormRegister = ({ setOnRegister }) => {
  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup
      .string()
      .required("Nome obrigatório")
      .max(18, "máximo de 18 caracteres"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "minímo de 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
        "a senha precisa conter pelos menos um caracter maiúsculo, outro minúsculo, um número e um caracter especial"
      ),
    confirmPassword: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password"), null], "senhas precisam ser iguais"),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
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

        <Button
          handleClick={(e) => {
            e.preventDefault();
            setOnRegister(false);
          }}
          isSmall
          bg="darkGrey"
        >
          Voltar
        </Button>
      </div>
      <div className="form">
        <h2>Crie sua conta</h2>

        <small>Rapido e grátis, vamos nessa</small>
        <Input
          register={register}
          name="name"
          error={errors?.name}
          type="text"
          label="Nome"
          placeholder="Digite aqui seu nome"
        />

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

        <Input
          register={register}
          name="confirmPassword"
          error={errors?.confirmPassword}
          type="password"
          label="Confirmar Senha"
          placeholder="Digite novamente sua senha"
        />

        <Input
          register={register}
          error={errors}
          type="text"
          label="Bio"
          placeholder="Fale sobre você"
        />

        <Input
          register={register}
          error={errors}
          type="text"
          label="Contato"
          placeholder="Opção de contato"
        />

        <FalseSelect
          label="Selecionar módulo"
          selectOptions={[
            "Primeiro Módulo",
            "Segundo Módulo",
            "Terceiro Módulo",
            "Quarto Módulo",
            "Quinto Módulo",
            "Sexto Módulo",
          ]}
        />

        <Button type="submit" bg="red">
          Cadastrar
        </Button>
      </div>
    </StyledForm>
  );
};

export default FormRegister;
