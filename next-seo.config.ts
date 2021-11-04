const title = "Carles Moreno";
const description = "Carles Moreno's personal site, where his projects, skills and experience are displayed";
const url = "https://carles2m.com";

export default {
  title,
  description,
  canonical: url,
  openGraph: {
    locale: "en_US",
    title: "Carles Moreno's site",
    description,
    url,
    type: "profile",
    profile: {
      firstName: "Carles",
      lastName: "Moreno",
      username: "carles2m",
      gender: "male"
    },
    images: [{
      url: `${url}/icons/banner.png`,
      type: "image/png",
      width: 564,
      height: 295,
      alt: "Carles Moreno's website image"
    }]
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@carles2m",
    site: "@carles2m"
  },
  additionalMetaTags: [
    {
      name: "apple-mobile-web-app-title",
      content: title
    },
    {
      name: "application-name",
      content: title
    },
    {
      name: "msapplication-TileColor",
      content: "#f7fafc"
    },
    {
      name: "msapplication-TileImage",
      content: "/icons/mstile-144x144.png"
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml"
    },
    {
      name: "theme-color",
      content: "#f7fafc"
    },
  ],
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      href: "/icons/apple-touch-icon.png",
      sizes: "180x180"
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/icons/favicon-32x32.png",
      sizes: "32x32"
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/icons/favicon-16x16.png",
      sizes: "16x16"
    },
    {
      rel: "manifest",
      href: "/site.webmanifest"
    },
    {
      rel: "mask-icon",
      href: "/icons/safari-pinned-tab.svg",
      color: "#c53030"
    },
    {
      rel: "shortcut icon",
      href: "icons/favicon.ico"
    },
  ],
  robotsProps: {
    noarchive: true
  }
} as const;