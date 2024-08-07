import styled from "styled-components";

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 278vh;
    background-color: #f2f2f2;
`;

export const WelcomeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 70px;

    img {
        width: 50px;
        height: 50px;
        margin-right: 5px;
    }
`;

export const ImgDiv = styled.div`
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid #6f6f6f;
    img {
        width: 350px;
        height: auto;
        margin: 20px;
        margin-top: 0;
    }
`;

export const Welcome = styled.p`
    font-family: 'Russo One', sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #FF8F0E;
    transform: translateX(-5px);
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    width: 100%;
    background-color: #FF8F0E;
    padding: 20px 0;

    img {
        width: 24px;
        margin: 5px;
    }
`;

export const FollowUs = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding-bottom: 15px;
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 20px;
`;
