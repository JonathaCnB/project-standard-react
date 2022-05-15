import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    min-height: 70vh;
  `}
`;
