import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: ${theme.colors.formGray};
      margin-bottom: 2em;
    }

    a {
      display: block;
      margin-top: 15px;
      padding: 10px 15px;
    }
  `}
`;
