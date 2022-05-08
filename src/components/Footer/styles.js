import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray};
  `}
`;
