import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from "../../assets/geral/facebook.png";
import GoogleIcon from "../../assets/geral/google.png";
import CadastroBar from "../../components/CadastroBar";
import { Cadastro2Div, FormDiv, InputDiv, Input, InputTitle, SocialsDiv } from "./style";
import SignUpButton from '../../components/SignUpButton';

export default function Cadastro2() {
  return (
    <Cadastro2Div>
      <CadastroBar />
      <SocialsDiv>
        <img src={FacebookIcon} alt="Facebook" />
        <img src={GoogleIcon} alt="Google" />
      </SocialsDiv>

      <FormDiv>
        <InputDiv>
          <InputTitle>Nome</InputTitle>
          <Input type="text" placeholder="Nome" />
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF</InputTitle>
          <Input type="text" placeholder="Digite seu CPF" />
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone</InputTitle>
          <Input type="text" placeholder="Digite seu telefone" />
        </InputDiv>
        <InputDiv>
          <InputTitle>Senha</InputTitle>
          <Input type="password" placeholder="Digite sua senha" />
        </InputDiv>
        <InputDiv>
          <InputTitle>Confirme sua senha</InputTitle>
          <Input type="password" placeholder="Confirme sua senha" />
        </InputDiv>
        <SignUpButton to="/parabens">Cadastre-se</SignUpButton>
      </FormDiv>
    </Cadastro2Div>
  );
}
