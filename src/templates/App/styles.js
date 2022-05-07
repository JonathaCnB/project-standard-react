import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
