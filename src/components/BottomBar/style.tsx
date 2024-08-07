import styled from "styled-components";

export const BottomBarDiv = styled.div`
    display: flex;
    width: 100%;
    height: 55px;
    justify-content: space-around;
    padding: 5px 0px;
    padding-top: 15px;
    align-items: center;
    position: fixed; 
    bottom: 0;
    z-index: 1000;
    background-color: #2B2B2B;
`;

const ItemDiv = styled.div`
    color: white;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;

    p {
        margin-top: 6px;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const HomeItemDiv = styled(ItemDiv)``;
export const ChatItemDiv = styled(ItemDiv)``;
export const AvisosItemDiv = styled(ItemDiv)``;
export const PerfilItemDiv = styled(ItemDiv)``;