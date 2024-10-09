// Container.tsx
import styled from 'styled-components';

interface ContainerProps {
    flexDirection?: 'row' | 'column';
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    padding?: string;
    margin?: string;
    width?: string;
    gap?: string;
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items: ${(props) => props.alignItems || 'stretch'};
    padding: ${(props) => props.padding || '0'};
    margin: ${(props) => props.margin || '0'};
    width: ${(props) => props.width || '100%'};
    gap: ${(props) => props.gap || '0'};
`;

export default Container;
