import styled from "styled-components";

export const ErroDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
`;

export const LoginNotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 10%;
`;

export const Img = styled.img`
  width: 240px;
  height: 240px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 400;
  font-family: 'Russo One', sans-serif;
  color: #2B2B2B;
  margin-bottom: 0px;
`;

export const MensagemErro = styled.p`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  align-content: center;
  text-align: center;
  padding: 5px 35px;
  font-weight: 400;
  color: #2B2B2B;
`;