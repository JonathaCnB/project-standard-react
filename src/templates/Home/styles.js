import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}

  .search_form {
    max-width: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
  }

  .search_form input {
    margin-right: 10px;
    width: 50%;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    text-align: center;
  `}

  .noposts {
    text-align: center;
  }

  .noposts p {
    margin-bottom: 1.5em;
  }

  .noposts a {
    padding: 10px 25px;
  }
`;
