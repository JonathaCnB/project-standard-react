import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.secondaryBg};
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      color: ${theme.colors.primaryColor};
    `}
  }
`;
