import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.a`
    font-size: 30px;
    margin-left: 80px;
    span {
        color: ${(props) => props.theme.colors.secondary};
    }
`;

const Logo = () => {
    return (
        <StyledLogo href='#'>
            <span>Lucas</span>Alves
        </StyledLogo>
    );
};

export default Logo;
