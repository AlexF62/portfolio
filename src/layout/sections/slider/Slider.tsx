import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import photo from '../../../assets/icons/Rectangle.svg';

const SlideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;

    border-radius: 50%;
    margin-bottom: 20px;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
    color: #f39c12;
`;

const SlideTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;
`;

const SlideText = styled.p`
    font-size: 1rem;
    color: #777;
    max-width: 250px;
`;

const SlideContent: React.FC = () => {
    return (
        <>
            <SlideContainer>
                <IconWrapper>
                    <Icon src={photo} alt='Branding Icon' />
                </IconWrapper>
                <SlideTitle>Branding Design</SlideTitle>
                <SlideText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Orci eget mi elit cursus donec amet sed sagittis.
                </SlideText>
            </SlideContainer>
        </>
    );
};

const StyledSlider = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
`;

const StyledSliderContainer = styled.div`
    max-width: 1270px;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        font-size: 60px;
        color: ${(props) => props.theme.colors.titleColor};
    }
    p {
        color: #868686;
        font-size: 18px;
    }
`;

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const StyledDots = styled.div`
    .alice-carousel__dots-item {
        background-color: #ddd;
    }

    .alice-carousel__dots-item.__active {
        background-color: ${(props) => props.theme.colors.secondary};
    }
`;

const items = [
    <SlideContent key='1' />,
    <SlideContent key='1' />,
    <SlideContent key='1' />,
    <SlideContent key='2' />,
    <SlideContent key='2' />,
];

export const Slider = () => (
    <StyledSlider>
        <TitleContent>
            <h3>What I Offer</h3>
            <p>Things that I can do for my clients. Just make your good</p>
            <p>trust I love to provide quality works.</p>
        </TitleContent>
        <StyledDots>
            <StyledSliderContainer>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                />
            </StyledSliderContainer>
        </StyledDots>
    </StyledSlider>
);

export default Slider;
