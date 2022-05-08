import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    min-height: 60vh;
    margin-bottom: 5em;
  `}
`;
