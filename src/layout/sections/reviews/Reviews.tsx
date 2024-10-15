import React from 'react';
import styled from 'styled-components';
import images from '../../../assets/images/reviews/reviews.png';
import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const StyledReviews = styled.section`
    max-width: 1236px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 160px;
`;

const ReviewsSliderContainer = styled.div`
    width: 100%;
    max-width: 1236px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 114px;
`;

const ReviewsImage = styled.img`
    max-width: 589px;
    max-height: 359px;
`;

const PrevButtonArrow = styled.button`
    border: none;
`;
const NextButtonArrow = styled.button`
    border: none;
`;

const renderPrevButton = () => (
    <PrevButtonArrow>
        <IoIosArrowRoundBack size={30} />
    </PrevButtonArrow>
);

const renderNextButton = () => (
    <NextButtonArrow>
        <IoIosArrowRoundForward size={30} />
    </NextButtonArrow>
);

const TitleReviews = styled.h5`
    color: ${(props) => props.theme.colors.titleColor};
    font-size: 22px;
`;

const TextReviewsProf = styled.p`
    color: #a8a8a8;
    font-size: 16px;
`;

const ReviewsSliderContent: React.FC = () => {
    return (
        <ReviewsSliderContainer>
            <div>
                <ReviewsImage src={images} alt='reviews-image' />
            </div>
            <div>
                <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dapibus eu placerat at nisl posuere aliquet amet pharetra
                    malesuada. Suspendisse nisl ac at tortor. Sit faucibus
                    placerat at nisl posuere aliquet amet pharetra suspendisse
                    risus.”
                </p>
                <TitleReviews>Emma Brown</TitleReviews>
                <TextReviewsProf>CEO - Squirrel Sweets</TextReviewsProf>
            </div>
        </ReviewsSliderContainer>
    );
};

const items = [<ReviewsSliderContent />, <ReviewsSliderContent />];

const Reviews = () => {
    return (
        <StyledReviews>
            <AliceCarousel
                items={items}
                responsive={responsive}
                disableDotsControls
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
            />
        </StyledReviews>
    );
};

export default Reviews;
