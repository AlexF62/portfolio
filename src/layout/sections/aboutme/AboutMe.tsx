import React from 'react';
import styled from 'styled-components';
import Container from '../../../styles/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

const StyledAboutMe = styled.section`
    display: flex;
    gap: 100px;
    justify-content: space-between;
    max-width: 1260px;
    width: 100%;
    height: auto;
    margin: 150px auto 0;
    padding: 60px;
`;

const Title = styled.h2`
    font-size: 60px;
    color: ${(props) => props.theme.colors.titleColor};
    margin-bottom: 20px;
`;

const Text = styled.p`
    margin-bottom: 20px;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.titleColor};
`;

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 19px 40px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.titleColor};
    color: ${(props) => props.theme.colors.background};
    transition: 1s all;

    &:hover {
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.titleColor};
    }
`;

const StyledButtonCV = styled.button`
    border: none;
    border-radius: 5px;
    padding: 20px 41px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.titleColor};
    border: 1px solid #e4dfdf;
    animation: shimmer 6s infinite;

    @keyframes shimmer {
        0% {
            background-color: ${(props) => props.theme.colors.background};
        }
        50% {
            background-color: ${(props) => props.theme.colors.titleColor};

            color: ${(props) => props.theme.colors.background};
        }
        100% {
            background-color: ${(props) => props.theme.colors.background};
        }
    }

    &:hover {
        opacity: 0.8;
    }
`;

const StyledButtonCOntainer = styled.div`
    display: flex;
    gap: 10px;
`;

const StyledProgressContainer = styled.div`
    margin-bottom: 20px;
`;

const ProgressLabel = styled.p`
    font-size: 16px;
    margin: 5px 0;
`;

const ProgressBarContainer = styled.div`
    position: relative;
    margin: 10px 0;
`;

const StyledProgressBar = styled(ProgressBar)`
    height: 5px;
`;

const ProgressPercentage = styled.span`
    position: absolute;
    right: 0;
    top: -25px;
`;

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container flexDirection='column'>
                <Title>About Me</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dapib eu placerat at nisl posuere aliquet amet pharetra
                    malesuada. Spendisse nisl ac at tortor. Sit faucibus
                    suspendisse risus vulputate pulvinar cursus suspendisse
                    risus vulputate enim pharetra eu.
                </Text>
                <Text>
                    Sit faucibus suspendisse risus vulputate pulvinar cursus
                    enim hareta eu. Sagittis enim morb. Suspendisse risus.
                </Text>
                <StyledButtonCOntainer>
                    <StyledButton>HIRE ME</StyledButton>
                    <StyledButtonCV>DOWNLOAD CV</StyledButtonCV>
                </StyledButtonCOntainer>
            </Container>
            <Container flexDirection='column' margin='40px 0'>
                <StyledProgressContainer>
                    <ProgressLabel>Adobe Photoshop</ProgressLabel>
                    <ProgressBarContainer>
                        <StyledProgressBar variant='warning' now={96} />
                        <ProgressPercentage>96%</ProgressPercentage>
                    </ProgressBarContainer>
                </StyledProgressContainer>
                <StyledProgressContainer>
                    <ProgressLabel>Adobe Illustrator</ProgressLabel>
                    <ProgressBarContainer>
                        <StyledProgressBar variant='warning' now={92} />
                        <ProgressPercentage>92%</ProgressPercentage>
                    </ProgressBarContainer>
                </StyledProgressContainer>
                <StyledProgressContainer>
                    <ProgressLabel>Adobe After Effect</ProgressLabel>
                    <ProgressBarContainer>
                        <StyledProgressBar variant='warning' now={85} />
                        <ProgressPercentage>85%</ProgressPercentage>
                    </ProgressBarContainer>
                </StyledProgressContainer>
                <StyledProgressContainer>
                    <ProgressLabel>Adobe InDesign</ProgressLabel>
                    <ProgressBarContainer>
                        <StyledProgressBar variant='warning' now={94} />
                        <ProgressPercentage>94%</ProgressPercentage>
                    </ProgressBarContainer>
                </StyledProgressContainer>
            </Container>
        </StyledAboutMe>
    );
};

export default AboutMe;
