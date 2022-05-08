import styled, { css } from 'styled-components';

export const Navbar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.mainBg};
    .brand {
      font-size: 1.2em;
    }
    .brand span {
      font-family: ${theme.font.secondary};
      font-weight: 900;
      text-transform: uppercase;
    }
    .links_lists {
      display: flex;
      list-style: none;
    }
    .links_lists li {
      margin-right: 1em;
    }
    .links_lists li a {
      padding: 0.4em 0.6em;
    }
    .active {
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
    }
  `}
`;
