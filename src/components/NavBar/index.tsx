import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { NavBarDiv, MenuDiv, SearchBarDiv, CartDiv, SearchInput, SuggestionDiv } from "./style";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const [showSuggestion, setShowSuggestion] = useState(false);
    const navigate = useNavigate();

    const handleInputFocus = () => {
        setShowSuggestion(true);
    };

    const handleSuggestionClick = () => {
        navigate('/erroProduto');
    };

    return (
        <NavBarDiv>
            <MenuDiv>
                <MenuIcon width={24} height={24} />
            </MenuDiv>
            <SearchBarDiv>
                <SearchInput 
                    type="text" 
                    placeholder="Encontre no Elektro" 
                    onFocus={handleInputFocus} 
                />
                {showSuggestion && (
                    <SuggestionDiv onClick={handleSuggestionClick}>
                        Iphone 15 Pro Max
                    </SuggestionDiv>
                )}
            </SearchBarDiv>
            <CartDiv>
                <CartIcon width={24} height={24} />
            </CartDiv>
        </NavBarDiv>
    )
}
