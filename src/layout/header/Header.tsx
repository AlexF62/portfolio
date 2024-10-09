import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';

const StyledHeader = styled.header`
    background-image: url(${(props) => props.theme.colors.bgImage});
    max-width: 1920px;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    display: flex;
    align-items: center;
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
