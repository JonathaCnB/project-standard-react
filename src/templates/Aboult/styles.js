import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBg};
    text-align: center;
    font-size: 2em;
  `}
`;
