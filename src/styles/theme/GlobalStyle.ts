import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 
body {
  
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.primary};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;