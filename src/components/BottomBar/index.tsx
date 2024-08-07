import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg';
import { ReactComponent as AvisosIcon } from '../../assets/icons/avisos.svg';
import { ReactComponent as PerfilIcon } from '../../assets/icons/perfil.svg';
import { BottomBarDiv, HomeItemDiv, ChatItemDiv, AvisosItemDiv, PerfilItemDiv } from "./style";

export default function BottomBar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleErrorClick = () => {
        navigate('/erro');
    };

    return (
        <BottomBarDiv>
            <HomeItemDiv onClick={handleHomeClick}>
                <HomeIcon width={24} height={24} />
                <p>Home</p>
            </HomeItemDiv>
            
            <ChatItemDiv onClick={handleErrorClick}>
                <ChatIcon width={24} height={24} />
                <p>Chat</p>
            </ChatItemDiv>

            <AvisosItemDiv onClick={handleErrorClick}>
                <AvisosIcon width={24} height={24} />
                <p>Avisos</p>
            </AvisosItemDiv>

            <PerfilItemDiv onClick={handleErrorClick}>
                <PerfilIcon width={24} height={24} />
                <p>Perfil</p>
            </PerfilItemDiv>
        </BottomBarDiv>
    );
};
