import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.secondaryBg};
      font-family: Helvetica;
      color: #fff;
    `}
  }

  html, body {
    height: 100%;
  }

  button {
    background: #1646a0;
    color: #fff;
    padding: 0 45px;
    border: 2px solid #fff;
    border-radius: 25px;
    height: 50px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    transition: .4s;
  }

  button:hover {
    background-color: #0923af;
  }
`;
