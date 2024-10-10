import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
    background-image: url(${(props) => props.theme.colors.bgImage});

    background-position: left center;
    background-repeat: no-repeat;
    position: relative;
    max-width: 1920px;
    height: 100vh;
`;
