import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import { NextSeo } from "next-seo";
import React from "react";

import SEO from "../../next-seo.config";
import { Chakra } from "../lib/Chakra";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <NextSeo {...SEO} />
    <Chakra cookies={pageProps.cookies}>
      <Head>
        <title>Carles Moreno</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      </Head>
      <Component {...pageProps} />
    </Chakra>
  </>
);

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
