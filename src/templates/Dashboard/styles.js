import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.2em;
    margin-bottom: 0.5em;
  }

  ${({ theme }) => css`
    p {
      color: ${theme.colors.formGray};
    }

    .post_header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      border-bottom: 2px solid ${theme.colors.secondGray};
      width: 80%;
      padding: 10px;
    }

    .post_row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${theme.colors.secondGray};
      width: 80%;
      padding: 10px;
    }

    .post_row p {
      color: ${theme.colors.black};
    }

    .post_row button,
    .post_row a {
      margin: 0 5px;
      height: 30px;
      width: 100px;
      font-size: 0.7em;
    }
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
