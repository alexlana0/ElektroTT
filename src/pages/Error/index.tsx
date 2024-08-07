import React from "react";
import { ErroDiv, LoginNotFoundDiv, Img, Title, MensagemErro } from "./style";
import ErrorImage from "../../assets/geral/error404.png";
import SignUpButton from "../../components/SignUpButton";
import LogInButton from "../../components/LogInButton";
import BottomBar from "../../components/BottomBar";

const LoginNotFound: React.FC = () => {
  return (
    <ErroDiv>
      <LoginNotFoundDiv>
        <Title>Opsss...</Title>
        <Img src={ErrorImage} alt="Error 404" />
        <MensagemErro>
          Infelizmente, parece que você ainda não está logado.
        </MensagemErro>
        <SignUpButton to="/cadastro1">Cadastre-se</SignUpButton>
        <LogInButton />
      </LoginNotFoundDiv>
      <BottomBar />
    </ErroDiv>
  );
};

export default LoginNotFound;
