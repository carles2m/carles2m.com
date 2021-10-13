import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import React from 'react'
import Head  from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
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
