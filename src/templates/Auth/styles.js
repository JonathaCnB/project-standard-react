import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBlack};
    border: 1px solid ${theme.colors.primaryGray};
    padding: 1.5em 2em;
    max-width: 33%;
    margin: 2em auto;
  `}

  h2 {
    text-align: center;
    font-size: 2.1em;
    margin-top: 0;
  }

  p {
    text-align: center;
  }

  p a {
    ${({ theme }) => css`
      font-weight: bold;
      color: ${theme.colors.blue};
    `}
  }

  .subtitle {
    ${({ theme }) => css`
      color: ${theme.colors.sixthGray};
      font-weight: bold;
      margin-bottom: 1.5em;
    `}
  }

  form {
    ${({ theme }) => css`
      border-bottom: 1px solid ${theme.colors.primaryGray};
      margin-bottom: 1.5em;
      padding-bottom: 1.5em;
    `}
  }
`;

export const Register = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
  `}
`;

export const Login = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
  `}
`;
