import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    display: flex;
    align-items: center;
    max-width: 1920px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
        </StyledHeader>
    );
};

export default Header;
