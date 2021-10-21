import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import React from "react";

import { Chakra } from "../lib/Chakra";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Chakra cookies={pageProps.cookies}>
    <Head>
      <title>Carles Moreno</title>
    </Head>
    <Component {...pageProps} />
  </Chakra>
);

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
