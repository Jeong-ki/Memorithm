import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Pretendard';
    src: url('../../public/font/Pretendard-Bold.woff2');
  }

  body {
    font-family: 'Pretendard';
  }

  button {
    border: none;
    background-color: transparent;
    outline: none;
  }

  select {
    appearance: none;
    border-radius: 0px;
    padding: 6px 9px;
    border: none;
  }
`;

export default GlobalStyle;
