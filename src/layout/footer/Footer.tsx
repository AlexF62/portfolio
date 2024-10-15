import React from 'react';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const FooterStyled = styled.footer`
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    background-color: ${(props) => props.theme.colors.titleColor};
    color: ${(props) => props.theme.colors.background};
`;

const FooterTitle = styled.h2`
    font-size: 72px;
    padding-top: 126px;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 21px;
`;

const FooterButton = styled.button`
    padding: 20px 48px;
    border-radius: 40px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
    animation: borderBlink 1.5s infinite;
    margin-bottom: 150px;

    @keyframes borderBlink {
        0% {
            border-color: ${(props) => props.theme.colors.secondary};
        }
        50% {
            border-color: ${(props) => props.theme.colors.background};
        }
        100% {
            border-color: ${(props) => props.theme.colors.secondary};
        }
    }
`;

const FooterText = styled.p`
    max-width: 463px;
    text-align: center;
    margin-bottom: 60px;
`;

const FooterAllRightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    padding: 10px 0;
`;

const FooterTextAllRight = styled.p`
    color: #ababab;
    span {
        color: ${(props) => props.theme.colors.background};
    }
`;

const FooterListItem = styled.ul`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;

    li a {
        &:hover {
            color: ${(props) => props.theme.colors.secondary};
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <FooterTitle>Let’s work together</FooterTitle>
                <FooterText>
                    I’m available for freelance work. Have any projects in your
                    mind? Just feel free to contact me
                </FooterText>

                <FooterButton>CONTACT ME</FooterButton>
            </FooterContainer>
            <FooterAllRightContainer>
                <FooterTextAllRight>
                    © 2021 <span>Templates Jungle.</span> All rights reserved
                </FooterTextAllRight>

                <FooterListItem>
                    <li>
                        <a href='#'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FaYoutube />
                        </a>
                    </li>
                </FooterListItem>
            </FooterAllRightContainer>
        </FooterStyled>
    );
};

export default Footer;
