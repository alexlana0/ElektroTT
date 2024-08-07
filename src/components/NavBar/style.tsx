import styled from 'styled-components';

export const NavBarDiv = styled.div `
    width: 100%;
    height: 71px;
    background-color: #2B2B2B;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const MenuDiv = styled.div`
    color: white;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const SearchBarDiv = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const CartDiv = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
`;

export const SearchInput = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 8px 16px 8px 16px;
    border-radius: 16px;
    border: none;
    outline: none;
    box-sizing: border-box;
`;

export const SuggestionDiv = styled.div`
    position: absolute;
    top: 40px;  
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 400px;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;