import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Toggle from './toggle';
import Nav from './nav';
import Footer from './footer';

export default function Layout({ children }) {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };
  return (
    <div className='text-center w-5/6 m-auto px-2'>
      <Head>
        <title>Dash Demo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Toggle switchTheme={switchTheme} theme={theme} />
        <Nav />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
