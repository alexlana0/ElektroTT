import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ErroDiv, ProductNotFoundDiv, Img, Title, MensagemErro } from "./style";
import ErrorImage from "../../assets/geral/error404.png";
import BottomBar from "../../components/BottomBar";

const ProductNotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <ErroDiv>
      <ProductNotFoundDiv>
        <Title>Opsss...</Title>
        <Img src={ErrorImage} alt="Error 404" />
        <MensagemErro>
          Infelizmente, parece que não encontramos o produto desejado.
        </MensagemErro>
      </ProductNotFoundDiv>
      <BottomBar />
    </ErroDiv>
  );
};

export default ProductNotFound;