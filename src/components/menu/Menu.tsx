/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { menu } from '../../styles/theme/helpers/menu';
import styled from 'styled-components';

const StyledMenu = styled.nav`
    margin-right: 80px;
    position: relative;

    ul {
        display: flex;
        gap: 20px;
    }
`;

const Underline = styled.div`
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: left 1s ease;
`;

const Menu: React.FC = () => {
    const [active, setActive] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActive(index);
    };

    return (
        <StyledMenu>
            <ul>
                {menu.map((item, index) => (
                    <li key={index} onClick={() => handleClick(index)}>
                        <a href='#'>{item}</a>
                        {active === index && <Underline />}
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

export default Menu;
