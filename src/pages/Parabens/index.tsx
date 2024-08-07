import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ParabensDiv, Img, Title, BemVindo } from "./style";
import ParabensImg from "../../assets/geral/parabens.png";

export default function Parabens() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <ParabensDiv>
      <Img src={ParabensImg} alt="Parabéns" />
      <Title>Parabéns, você conseguiu!</Title>
      <BemVindo>
        Bem-vindo ao time de usuários e colaboradores Elektro.
      </BemVindo>
    </ParabensDiv>
  );
}