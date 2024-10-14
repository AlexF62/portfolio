/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { brandsItems } from '../../../utils/brands';

const BrandStyled = styled.section`
    width: 100%;
    max-width: 1920px;
    background-color: ${(props) => props.theme.colors.titleColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BrandContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const BrandTitle = styled.h2`
    padding-top: 150px;
    font-size: 60px;
`;
const BrandText = styled.p`
    color: #b4b4b4;
    font-size: 18px;

    &:last-child {
        margin-bottom: 60px;
    }
`;

const BrandIconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding-top: 60px;
`;

const BrandIconLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    border-left: 1px dotted #767676;
    border-right: 1px dotted #767676;
    border-bottom: 1px dotted #767676;
    padding: 50px;
    height: 150px;
    text-align: center;
`;

const BrandIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BrandIconImage = styled.img`
    transition: 1s ease;

    &:hover {
        filter: brightness(0) saturate(100%) invert(75%) sepia(6%) saturate(0%)
            hue-rotate(190deg) brightness(85%) contrast(85%);
    }
`;

const Brands = () => {
    return (
        <BrandStyled>
            <BrandContainer>
                <BrandTitle>Brands I’ve Worked</BrandTitle>
                <BrandText>
                    Things that I can do for my clients. Just make your good
                    trust
                </BrandText>
                <BrandText>I love to provide quality works.</BrandText>
                <BrandIconContainer>
                    {brandsItems.map((item) => (
                        <BrandIconLink key={item.id} href='#'>
                            <BrandIconWrapper>
                                <BrandIconImage src={item.image} alt='' />
                            </BrandIconWrapper>
                        </BrandIconLink>
                    ))}
                </BrandIconContainer>
            </BrandContainer>
        </BrandStyled>
    );
};

export default Brands;
