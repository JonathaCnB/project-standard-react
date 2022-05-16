import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primaryBlack};
  `}

  .error {
    ${({ theme }) => css`
      color: ${theme.colors.errorMessage};
      background-color: ${theme.colors.errorMessageBg};
      border-color: ${theme.colors.errorMessageBorder};
    `}
  }

  .success {
    ${({ theme }) => css`
      color: ${theme.colors.successMessage};
      background-color: ${theme.colors.successMessageBg};
      border-color: ${theme.colors.successMessageBorder};
    `}
  }
`;
