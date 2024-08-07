import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as VoltarIcon } from '../../assets/icons/voltar.svg';
import { CadastroBarDiv, VoltarDiv, Title, TitleDiv } from "./style";

export default function CadastroBar() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home');
  };

  return (
    <CadastroBarDiv>
      <VoltarDiv onClick={handleBackClick}>
        <VoltarIcon width={24} height={24} />
      </VoltarDiv>
      <TitleDiv>
        <Title> Cadastrar-se </Title>
      </TitleDiv>
    </CadastroBarDiv>
  );
}