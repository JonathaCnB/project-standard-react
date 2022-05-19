import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    ${({ theme }) => css`
      background: ${theme.colors.secondaryBg};
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: ${theme.colors.primaryColor};
    `}
  }

  a{
    ${({ theme }) => css`
      color: ${theme.colors.primaryColor};
      text-decoration: none;
    `}
  }

  .active {
    font-weight: bold;
  }

  ul {
    list-style: none;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  label span {
    ${({ theme }) => css`
      font-weight: bold;
      margin-bottom: 0.5em;
      color: ${theme.colors.secondaryGray};
      font-size: 0.7em;
    `}
  }

  input {
    ${({ theme }) => css`
      background-color: ${theme.colors.thidGray};
      color: ${theme.colors.secondaryGray};
      border: 1px solid ${theme.colors.fourthGray};
      border-radius: 2px;
      padding: 10px 8px;
      outline: none;
      margin-bottom: 0.6em;
    `}
  }

  input::placeholder {
    ${({ theme }) => css`
      color: ${theme.colors.secondaryGray};
    `}
  }

  .btn,
  button,
  input[type="submit"] {
    ${({ theme }) => css`
      background-color: ${theme.colors.blue};
      color: ${theme.colors.white};
      border: none;
      border-radius: 4px;
      padding: 10px 8px;
      font-weight: bold;
      cursor: pointer;
      opacity: 0.8;
      font-size: 1em;
    `}
  }

  input[type="submit"] {
    margin-top: 1em;
  }

  input:disabled {
    cursor: not-allowed;
    ${({ theme }) => css`
      background-color: ${theme.colors.primaryBlack};
    `}
  }

  button:hover,
  input[type="submit"]:hover {
    opacity: 1;
  }

  .cancel-btn {
    ${({ theme }) => css`
      background-color: ${theme.colors.fifthGray};
    `}
  }

  .hide {
    display: none;
  }
`;
