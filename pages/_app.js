import React from 'react';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
