import React from "react";
import { Link } from "react-router-dom";
import { CadastrarDiv, ConviteDiv, Img, MensagemCadastro, LinkDiv, LoginLink } from "./style";
import CadastroImage from "../../assets/geral/cadastro.png";
import CadastroBar from "../../components/CadastroBar";
import SignUpButton from "../../components/SignUpButton";

export default function Cadastro1() {
  return (
    <CadastrarDiv>
      <CadastroBar />

      <ConviteDiv>
        <Img src={CadastroImage} alt="cadastre-se" />
        <MensagemCadastro>
          Faça parte do nosso time. Cadastre-se!
        </MensagemCadastro>
        <SignUpButton to="/cadastro2">Cadastre-se</SignUpButton>
      </ConviteDiv>

      <LinkDiv>
        <LoginLink>Já possui cadastro? Faça Login!</LoginLink>
      </LinkDiv>
    </CadastrarDiv>
  );
}