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
      color: ${theme.colors.formGray};
    `}
  }

  input:focus,
  textarea:focus {
      outline: none;
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

  form {
    max-width: 40%;
    margin: 0 auto;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }

  label span {
    margin-bottom: .3em;
    font-weight: bold;
    text-align: left;
  }

  input, textarea {
    ${({ theme }) => css`
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ccc;
      padding: 0.8em 0;
      background-color: ${theme.colors.transparent};
    `}
  }

  .btn {
    ${({ theme }) => css`
      background-color: ${theme.colors.btnSuccess};
      color: ${theme.colors.white};
      text-align: center;
      cursor: pointer;
      border-radius: 10px;
      width: 120px;
      font-weight: bold;
      border: none;
      padding: 10px 15px;
      font-size: 1em;
    `}
  }

  .btn.btn-dark{
    ${({ theme }) => css`
      background-color: ${theme.colors.black};
      border-radius: 0;
    `}
  }

  .btn.btn-outline {
    ${({ theme }) => css`
      background-color: ${theme.colors.transparent};
      color: ${theme.colors.black};
      border: 1px solid ${theme.colors.black};
      padding: 7px 30px;
    `}
  }

  .btn:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.btnHover};
      color: ${theme.colors.white};
    `}
  }

  .btn.btn-outline:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.black};
    `}
  }

  .btn.btn-danger:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.btnDanger};
    `}
  }

  button[disabled] {
    ${({ theme }) => css`
      background-color: ${theme.colors.formGray};
    `}
  }

  .error {
    ${({ theme }) => css`
      background-color: ${theme.colors.containeBckError};
      color: ${theme.colors.containeColorError};
      border: 1px solid ${theme.colors.border};
      padding: 5px;
      border-radius: 5px;
    `}
  }
`;
