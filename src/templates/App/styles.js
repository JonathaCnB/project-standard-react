import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center:
    margin: 0 auto;
  `}
`;

export const AddProduct = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center:
    margin: 0 auto;
    border-top: 1px solid #000;
  `}
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;
