import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import React, { useEffect } from 'react'
import Head from 'next/head'
import * as serviceWorker from "../../lib/serviceWorker"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorker.unregister();
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>React App</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp
