import styled from "styled-components";

export const Button = styled.button<{ primary?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 100%; 
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
