import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBg};
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${theme.colors.primaryGray};
  `}
`;
