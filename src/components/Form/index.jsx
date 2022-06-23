import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import FalseSelect from "../Select";
import { StyledForm } from "./styles";

const Form = ({ isRegister, setIsRegister }) => {
  return (
    <StyledForm isRegister={isRegister}>
      <div className="head">
        <h1>Kenzie Hub</h1>
        {isRegister && (
          <Button
            handleClick={(e) => {
              e.preventDefault();
              setIsRegister(false);
            }}
            isSmall
            bg="darkGrey"
          >
            Voltar
          </Button>
        )}
      </div>
      <div className="form">
        <h2>{isRegister ? "Crie sua conta" : "Login"}</h2>
        {isRegister && (
          <>
            <small>Rapido e grátis, vamos nessa</small>
            <Input
              type="text"
              label="Nome"
              placeholder="Digite aqui seu nome"
            />
          </>
        )}
        <Input type="text" label="Email" placeholder="Digite aqui seu email" />
        <Input
          type="password"
          label="Senha"
          placeholder="Digite aqui sua senha"
        />

        {isRegister && (
          <>
            <Input
              type="password"
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
            />

            <Input type="text" label="Bio" placeholder="Fale sobre você" />

            <Input type="text" label="Contato" placeholder="Opção de contato" />

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
          </>
        )}

        {isRegister ? (
          <Button bg="red">Cadastrar</Button>
        ) : (
          <>
            <Button bg="pink">Entrar</Button>
            <span className="question">Ainda não possui uma conta?</span>
            <Button
              handleClick={(e) => {
                e.preventDefault();
                setIsRegister(true);
              }}
              bg="lightGrey"
            >
              Cadastre-se
            </Button>
          </>
        )}
      </div>
    </StyledForm>
  );
};

export default Form;
