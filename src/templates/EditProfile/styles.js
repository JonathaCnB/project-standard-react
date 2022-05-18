import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primaryGray};
    background-color: ${theme.colors.primaryBlack};
    padding: 1.5 2em;
    max-width: 40%;
    margin: 2em auto;
    text-align: center;

    .subtitle {
      color: ${theme.colors.fifthGray};
      margin: 2em;
    }

    .profile-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 1em;
    }
  `}
`;
