import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    h1 {
      background: ${theme.colors.mainBg};
      display: block;
      width: 100%;
    }
    .links_lists {
      display: flex;
      list-style: none;
    }
    .links_lists li {
      margin-right: 1em;
    }
  `}
`;
