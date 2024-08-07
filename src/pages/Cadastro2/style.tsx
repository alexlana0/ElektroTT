import styled from "styled-components";

export const Cadastro2Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 71px;
  box-sizing: border-box;
`;

export const SocialsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  box-sizing: border-box;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  width: 100%;
`;

export const InputTitle = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #a6a5a5;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
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
