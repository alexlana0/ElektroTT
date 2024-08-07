import styled from "styled-components";

export const DivPrincipal = styled.div`
  padding: 10px;
`;

export const CaixaProduto = styled.div`
  width: 210px;
  height: 220px;
  border-radius: 12px;
  background-color: #EAEAEA;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImagemProduto = styled.img`
  width: 140px;
  height: 140px;
`;

export const TituloProduto = styled.p`
  color: #333;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 5px 0;
  width: 100%;
  text-align: left;
`;

export const PrecoProduto = styled.p`
  color: #333;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 5px 0;
  text-align: left;
`;

export const DetalhesProduto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; 
`;

export const RotuloProduto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const IconeFavorito = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  transition: filter 0.3s ease;
  
  &:hover {
    filter: hue-rotate(0deg) brightness(0) saturate(10000%) invert(27%) sepia(100%) saturate(2141%) hue-rotate(353deg) brightness(91%) contrast(84%);
  }
`;