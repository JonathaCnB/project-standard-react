import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    img {
      width: 100%;
    }

    h2 {
      margin-bottom: 0.2em;
    }

    .photo-author {
      text-align: left;
    }

    .photo-author a {
      font-weight: bold;
    }
  `}
`;
