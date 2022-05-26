import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 50%;
    margin: 0 auto;
    .profile-header {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 1em;
      border-bottom: 1px solid ${theme.colors.primaryGray};
    }

    .profile-header img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 2em;
    }

    .new-photo {
      padding: 1em;
      border-bottom: 1px solid ${theme.colors.primaryGray};
    }

    .photos-container {
      display: flex;
      flex-wrap: wrap;
    }

    .photo {
      width: 32%;
      margin: 0.3%;
    }

    .photo img {
      width: 100%;
    }

    .actions {
      display: flex;
      justify-content: space-around;
      padding: 10px;
    }

    .actions svg {
      cursor: pointer;
    }

    .edit-photo {
      margin-bottom: 1em;
    }

    .edit-photo img {
      width: 100%;
      margin-bottom: 1em;
    }
  `}
`;