import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InicioDiv, Img, Title } from "./style";
import InicioLogo from "../../assets/geral/inicio.png";

export default function Inicio() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = () => {
      navigate("/home");
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [navigate]);

  return (
    <InicioDiv>
      <Img src={InicioLogo} alt="Logo Elektro" />
      <Title>Elektro</Title>
    </InicioDiv>
  );
}
