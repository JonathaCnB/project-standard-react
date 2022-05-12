import { render, screen } from '@testing-library/react';
import { renderTheme } from '../styles/render-theme';

import App from '.';
import { theme } from '../styles/theme';

test('renders learn react link', () => {
  renderTheme(<App />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello Word',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
