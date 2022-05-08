import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    ${({ theme }) => css`
      font-family: ${theme.font.primary};
      background: ${theme.colors.white};
      margin: 0;
      padding: 0;
    `}
  }

  input::placeholder,
  textarea::placeholder {
    ${({ theme }) => css`
      font-family: ${theme.font.primary};
    `}
  }

  input:focus,
  textarea:focus {
    ${() => css`
      outline: none;
    `}
  }

  a,
  nav button {
    ${({ theme }) => css`
      text-decoration: none;
      background-color: ${theme.colors.transparent};
      border: none;
      color: ${theme.colors.black};
      transition: 0.4s;
      font-size: 1em;
      cursor: pointer;
      font-family: ${theme.font.primary};
    `}
  }

  a:hover,
  nav button:hover {
    ${({ theme }) => css`
      color: ${theme.colors.hoverGray};
    `}
  }
`;
