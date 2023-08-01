// pages/_app.tsx
import React from 'react';

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
    </main>

  );
}

export default MyApp;
