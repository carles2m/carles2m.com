import {
  createStandaloneToast,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextSeo } from "next-seo";
import React from "react";

import SEO from "../../next-seo.config";
import { Chakra } from "../components/Chakra";
import { profileName } from "../lib/content";

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
        </Head>

        <Component {...pageProps} />

        <SpeedInsights />
        <Analytics />
      </Chakra>
    </>
  );
};

export default MyApp;