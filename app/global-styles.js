import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    background: #ffffff;
  }

  #app {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
