import styled from 'styled-components';

export const CadastroBarDiv = styled.div`
    width: 100%;
    height: 71px;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: fixed;
    border-bottom: 1px solid #9e9e9e;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0px 4px 2px -2px gray;
`;

export const VoltarDiv = styled.div`
    position: absolute;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
`;