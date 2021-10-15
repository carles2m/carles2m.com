import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Carles Moreno's personal site, where his projects, skills and experience are summarized" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="apple-touch-icon" href="logo192.png" />
          <link rel="manifest" href="manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
