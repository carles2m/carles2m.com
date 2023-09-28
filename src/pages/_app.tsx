import { Partytown } from "@builder.io/partytown/react";
import {
  createStandaloneToast,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
import React from "react";

import SEO from "../../next-seo.config";
import { Chakra } from "../components/Chakra";
import { profileName } from "../lib/content";
import { GA_TRACKING_ID } from "../lib/gtag";

const { ToastContainer, toast } = createStandaloneToast();
const pwaToastId = "pwa-toast";

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps
}) => {
  if (typeof (navigator) !== "undefined" && "serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(() => {
      if (!toast.isActive(pwaToastId)) {
        toast({
          id: pwaToastId,
          title: <Text as="span"><ChakraLink variant="bw" textDecor="underline" isExternal href="https://developer.mozilla.org/docs/Web/Progressive_web_apps">PWA</ChakraLink> active</Text>,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top"
        });
      }
    });
  }

  return (
    <>
      <NextSeo {...SEO} />
      <ToastContainer />
      <Chakra cookies={pageProps.cookies}>
        <Head>
          <title>{profileName}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />

          <Partytown debug={false} forward={["dataLayer.push", "gtag"]} />
          <script
            id="google-analytics"
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){window.dataLayer.push(arguments);};
                window.gtag('js', new Date());
                window.gtag('config', '${GA_TRACKING_ID}');
              `
            }}
          />
        </Head>
        <Script
          type="text/partytown"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />

        <Component {...pageProps} />
      </Chakra>
    </>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);

  window.gtag("event", metric.name, {
    event_category: metric.label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value), // values must be integers
    event_label: metric.id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

export default MyApp;