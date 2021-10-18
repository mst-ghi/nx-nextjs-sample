import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Provider as ReduxProvider } from 'react-redux';
import { CoreStore } from '@micro-test/store';
import { Header } from '@micro-test/components';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxProvider store={CoreStore}>
        <Head>
          <title>Micro1</title>
        </Head>
        <div className="app">
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ReduxProvider>
    </>
  );
}

export default CustomApp;
