/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { CgArrowTopRight } from 'react-icons/cg';

const PostsStyled = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 990px;
    margin: 0 auto;
`;

const PostsTitle = styled.h2`
    color: ${(props) => props.theme.colors.titleColor};
    font-size: 60px;
    margin-bottom: 100px;
`;

const BlogItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 50px;
    width: 100%;
`;

const BlogTime = styled.time`
    color: #939393;
    font-size: 20px;
    margin-bottom: 18px;

    span {
        color: ${(props) => props.theme.colors.secondary};
        font-size: 48px;
    }
`;

const BlogSubTitle = styled.h5`
    color: #939393;
    margin: 0;
    width: 500px;
    text-align: left;

    &:hover {
        color: ${(props) => props.theme.colors.titleColor};
    }
`;

const BlogLink = styled.a`
    color: ${(props) => props.theme.colors.titleColor};
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        animation: bounce 3s ease-in-out infinite; /* Определяем анимацию здесь */
    }

    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-3px) rotate(10deg);
        }
    }
`;

const BlogContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const BlogButton = styled.button`
    margin-top: 120px;
    padding: 17px 40px;
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.titleColor};
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 200px;
`;

const Posts = () => {
    return (
        <PostsStyled>
            <PostsTitle>Blog Posts</PostsTitle>
            <BlogContainerWrapper>
                <BlogItemContainer>
                    <BlogTime dateTime='2024-10-15'>
                        <span>09</span>Feb
                    </BlogTime>
                    <BlogSubTitle>
                        Why should we invest more in branding first?
                    </BlogSubTitle>
                    <BlogLink href='#'>
                        Read More <CgArrowTopRight />
                    </BlogLink>
                </BlogItemContainer>
                <BlogItemContainer>
                    <BlogTime dateTime='2024-10-15'>
                        <span>08</span>Feb
                    </BlogTime>
                    <BlogSubTitle>
                        Best rules to follow for achieving business goals
                    </BlogSubTitle>
                    <BlogLink href='#'>
                        Read More <CgArrowTopRight />
                    </BlogLink>
                </BlogItemContainer>
                <BlogItemContainer>
                    <BlogTime dateTime='2024-10-15'>
                        <span>06</span>Feb
                    </BlogTime>
                    <BlogSubTitle>
                        Top 100 most beautiful t-shirt print design
                    </BlogSubTitle>
                    <BlogLink href='#'>
                        Read More <CgArrowTopRight />
                    </BlogLink>
                </BlogItemContainer>
                <BlogButton>Read All Blogs</BlogButton>
            </BlogContainerWrapper>
        </PostsStyled>
    );
};

export default Posts;
