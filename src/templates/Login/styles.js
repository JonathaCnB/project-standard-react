import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    p {
      color: ${theme.colors.formGray};
    }
  `}
`;
