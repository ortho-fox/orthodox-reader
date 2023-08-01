// pages/_app.tsx
import React from 'react';
import { Analytics } from '@vercel/analytics/react';


import { Lora } from 'next/font/google';
import '../styles/globals.css';

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (

    <main className=''>
      <Component {...pageProps} />
      <Analytics />
    </main>

  );
}

export default MyApp;
