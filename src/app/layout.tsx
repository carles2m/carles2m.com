import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import colors from "tailwindcss/colors";

import { description, profileName, twitterHandle, url } from "../lib/content";

const title = `${profileName}'s site`;

export const metadata: Metadata = {
  title: profileName,
  description: description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${url}/icons/banner.png`,
        type: "image/png",
        width: 564,
        height: 295,
        alt: `${profileName}'s website`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: twitterHandle,
    site: twitterHandle,
  },
  applicationName: title,
  robots: { index: true, follow: true, noarchive: true },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#eceeef",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#17233b",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color={colors.red[500]}
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
