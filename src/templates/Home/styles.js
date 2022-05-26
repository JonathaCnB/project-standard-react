import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 50%;
    margin: 0 auto;
    padding-top: 2em;

    .btn {
      display: block;
      max-width: 80px;
      text-align: center;
      margin: 0.5em 0 2em 0;
    }

    .no-photos {
      text-align: center;
    }

    .no-photos a {
      color: ${theme.colors.blue};
    }
  `}
`;
