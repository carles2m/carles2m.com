import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { theme } from "../lib/theme";

export default function Document() {
    return (
      <Html lang="en" dir="ltr">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} type="cookie" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
