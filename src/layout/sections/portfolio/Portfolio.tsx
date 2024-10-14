import React from 'react';
import styled from 'styled-components';
import { portfolioItems } from '../../../utils/portfolio';

const StyledPortfolio = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1270px;
    align-items: center;
    justify-content: center;
`;

const PortfolioTitle = styled.h2`
    color: black;
    font-size: 60px;
    margin-bottom: 50px;
`;

const NavPortfolio = styled.nav`
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
`;

const NavButton = styled.button`
    color: #929292;
    border: none;
    background: none;
    position: relative;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.colors.titleColor};
    }

    &::after {
        content: '•';
        color: #929292;
        font-size: 10px;
        position: absolute;
        right: -10px;
        top: 8px;
    }

    &:last-child::after {
        content: '';
    }
`;

const NavPortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

const PortfolioButton = styled.a`
    display: inline-block;
    background-color: ${(props) => props.theme.colors.titleColor};
    padding: 17px 49px;
    text-align: center;
    margin-top: 60px;
    font-size: 16px;
    transition: 0.5s all;
    margin-bottom: 150px;

    &:hover {
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.titleColor};
    }
`;

const Portfolio = () => {
    return (
        <StyledPortfolio>
            <PortfolioContainer>
                <PortfolioTitle>Portfolio</PortfolioTitle>
                <NavPortfolio>
                    <NavButton>All</NavButton>
                    <NavButton>Branding</NavButton>
                    <NavButton>T-Shirt</NavButton>
                    <NavButton>Package</NavButton>
                    <NavButton>Poster</NavButton>
                </NavPortfolio>
                <NavPortfolioWrapper>
                    {portfolioItems.map((item) => (
                        <a key={item.id} href='#'>
                            <img src={item.images} alt='' />
                        </a>
                    ))}
                </NavPortfolioWrapper>
                <PortfolioButton href='#'>View Portfolio</PortfolioButton>
            </PortfolioContainer>
        </StyledPortfolio>
    );
};

export default Portfolio;
