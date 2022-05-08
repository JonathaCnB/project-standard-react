import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './templates/App';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { CounterContextProvider } from './context/CounterContext';
import { TitleColorContextProvider } from './context/TitleColorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CounterContextProvider>
        <TitleColorContextProvider>
          <App />
        </TitleColorContextProvider>
      </CounterContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
