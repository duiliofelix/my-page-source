import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PublicRouter from './components/routes/PublicRouter';
import theme from './constants/theme';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <PublicRouter />
    </ThemeProvider>
  </BrowserRouter>
);

export default hot(module)(App);
