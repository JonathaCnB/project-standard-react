import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    h2 {
      font-size: 2.2em;
    }
    p {
      color: ${theme.colors.formGray};
      margin-bottom: 2em;
    }
  `}
`;
