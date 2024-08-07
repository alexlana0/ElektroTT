import React from 'react';
import { CategoriaContainer, CategoriaImagem, CategoriaTitle } from './style';

interface CategoriaProps {
  img: string;
  title: string;
}

const CategoriaProps: React.FC<CategoriaProps> = ({ img, title }) => {
  return (
    <CategoriaContainer>
      <CategoriaImagem src={img} alt={title} />
      <CategoriaTitle>{title}</CategoriaTitle>
    </CategoriaContainer>
  );
};

export default CategoriaProps;
