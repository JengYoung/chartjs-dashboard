import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  h4 {
    font-size: 22px;
    font-weight: bold;
  }
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    background-color: transparent;
  }
`;

export default GlobalStyle;
