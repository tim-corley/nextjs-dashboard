import { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Toggle from '../components/toggle';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    console.log('toggled...');
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };
  return (
    <div className='text-center'>
      <Head>
        <title>Dash Demo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <h1 className='text-5xl text-gray-800 dark:text-gray-100'>
        My Dashboard
      </h1>
      <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
        Dark mode with Tailwind and Next-themes
      </h1>
      <button onClick={switchTheme}>Change theme</button>
      <Toggle switchTheme={switchTheme} />
    </div>
  );
}
