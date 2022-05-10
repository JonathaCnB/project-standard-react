import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    h2 {
      font-size: 2.2em;
    }
    p {
      color: ${theme.colors.formGray};
      margin-bottom: 2em;
    }

    .preview_title {
      margin-bottom: 0.2em;
      color: ${theme.colors.black};
      font-weight: bold;
    }

    .image_preview {
      max-width: 100%;
      margin-bottom: 1em;
    }
  `}
`;
