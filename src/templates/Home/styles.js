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

export const TableProducts = styled.ul`
  ${() => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 15px 0;

    li {
      border: 1px solid #efefef;
      border-radius: 5px;
      padding: 10px;
      text-align: center;
      list-style: none;
      margin: 0 10px;
      width: 25%;
    }
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
  `}
`;
