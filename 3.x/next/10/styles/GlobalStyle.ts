import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

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
`;

export default GlobalStyle;
