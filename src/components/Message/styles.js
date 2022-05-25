import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme, type }) => css`
    border: 1px solid ${theme.colors.primaryBlack};
    color: ${type === 'error'
      ? theme.colors.errorMessage
      : theme.colors.successMessage};
    background-color: ${type === 'error'
      ? theme.colors.errorMessageBg
      : theme.colors.successMessageBg};
    border-color: ${type === 'error'
      ? theme.colors.errorMessageBorder
      : theme.colors.successMessageBorder};
  `}
`;
