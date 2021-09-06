/*
  How to Disable Server-Side Rendering (SSR) in Next.js | DEV Community
  https://dev.to/apkoponen/how-to-disable-server-side-rendering-ssr-in-next-js-1563

  How To Disable SSR for a NextJS Page | Frontend Digest
  https://frontend-digest.com/how-to-disable-ssr-for-a-nextjs-page-d6b19aa350e3
*/

import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';

import 'i18n';

import 'styles/globals.scss';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from 'state/provider/getLibrary';

const SafeHydrate: FunctionComponent = ({ children }) => (
  <div suppressHydrationWarning>
    {typeof window === 'undefined' ? null : children}
  </div>
);

export const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <SafeHydrate>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  </SafeHydrate>
);

export default App;
