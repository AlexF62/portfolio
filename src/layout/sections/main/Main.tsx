import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import Container from '../../../styles/Container';

const StyledMain = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 250px auto 0;
    max-width: 1120px;
    width: 100%;
    h2 {
        font-size: 70px;
    }

    span {
        font-size: 70px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.secondary};
    }

    h1 {
        font-size: 18px;
        font-weight: 200;
    }
    p {
        color: ${(props) => props.theme.colors.background};
        margin-bottom: 24px;
    }
`;

const StyledButton = styled.button`
    background: transparent;
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 30px;
    padding: 20px 49px;
    cursor: pointer;

    @keyframes blink-border {
        0% {
            border-color: ${(props) => props.theme.colors.secondary};
        }
        50% {
            border-color: ${(props) => props.theme.colors.primary};
        }
        100% {
            border-color: ${(props) => props.theme.colors.secondary};
        }
    }

    animation: blink-border 2s infinite;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 120px;
    margin-right: 40px;
    width: 100%;
`;

const IconLink = styled.a`
    transition: color 1s;

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }

    svg {
        fill: currentColor;
    }
`;

const Main = () => {
    return (
        <StyledMain>
            <Container
                alignItems='flex-start'
                justifyContent='flex-start'
                gap='40px'
                flexDirection='column'
            >
                <div>
                    <h2>Hello, I’m</h2>
                    <span>Lucas Alves</span>
                    <h1>Graphic Designer & Ceo of Graphic Type</h1>
                    <p>I love to provide quality works.</p>
                    <StyledButton>Get In Touch</StyledButton>

                    <SocialIcons>
                        <IconLink href='#'>
                            <FaFacebookF size={20} />
                        </IconLink>
                        <IconLink href='#'>
                            <FaTwitter size={20} />
                        </IconLink>
                        <IconLink href='#'>
                            <FaInstagram size={20} />
                        </IconLink>
                        <IconLink href='#'>
                            <FaYoutube size={20} />
                        </IconLink>
                    </SocialIcons>
                </div>
            </Container>
        </StyledMain>
    );
};

export default Main;
