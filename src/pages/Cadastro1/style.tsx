import styled from "styled-components";

export const CadastrarDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ConviteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 10%;
`;

export const Img = styled.img`
  padding-top: 70px;
  width: 240px;
  height: 240px;
`;

export const MensagemCadastro = styled.p`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  align-content: center;
  text-align: center;
  padding: 5px 35px;
  font-weight: 500;
  color: #2B2B2B;
`;

export const Button = styled.button<{ primary?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 50%;
  height: 50px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1em;
  font-weight: 400;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: #2B2B2B;
  color: white;
`;

export const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const LoginLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: blue;
  padding-top: 15px;
  text-decoration: none;
  text-decoration: underline;
`;