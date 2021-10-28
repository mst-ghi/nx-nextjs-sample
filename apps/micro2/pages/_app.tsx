import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Provider as ReduxProvider } from 'react-redux';
import { CoreStore } from '@micro-test/store';

function MicroApp2({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxProvider store={CoreStore}>
        <Head>
          <title>Micro2</title>
        </Head>
        <div className="app">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ReduxProvider>
    </>
  );
}

export default MicroApp2;
