import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRouter from './components/routes/PublicRouter';

const App = () => (
  <BrowserRouter>
    <PublicRouter />
  </BrowserRouter>
);

export default hot(module)(App);
