import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBlack};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.primaryGray};
    padding: 0.1em 1em;
  `}

  #search-form {
    position: relative;
    width: 20%;
  }

  #search-form svg {
    position: absolute;
    top: 4px;
    left: 9px;
    color: #000;
  }

  #search-form input {
    padding-left: 2.5em;
    border: none;
    border-radius: 5px;
    width: 100%;
    margin: 0;
  }

  #nav-links {
    display: flex;
    align-items: center;
    list-style: none;
  }

  #nav-links li {
    margin-right: 1em;
  }

  #nav-links span {
    cursor: pointer;
  }

  #nav-links svg {
    font-size: 1.5em;
  }
`;
