import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './templates/App';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

//Redux
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
