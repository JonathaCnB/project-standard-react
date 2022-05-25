import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-top: 2em;

    img {
      width: 100%;
    }

    .message-container {
      margin: 1em 0;
    }

    .comments {
      text-align: left;
    }

    .coments form {
      margin-bottom: 2em;
      padding-bottom: 1em;
      border-bottom: 1px solid ${theme.colors.primaryGray};
    }

    .author {
      display: flex;
      font-weight: bold;
    }

    .author img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1em;
    }
  `}
`;
