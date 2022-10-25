import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './shared/layout/Layout';
import Router from './utils/router/Router';
import theme from './utils/styles/theme';

export interface IAppProps {}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
