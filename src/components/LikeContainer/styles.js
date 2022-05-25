import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border-top: 1px solid ${theme.colors.primaryGray};
    border-bottom: 1px solid ${theme.colors.primaryGray};

    #home {
      border: none;
    }

    svg {
      font-size: 1.5em;
      cursor: pointer;
    }

    p {
      margin-left: 1em;
    }
  `}
`;
