import {
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";

import advanced21 from "../../public/21.webp";
import bus from "../../public/bus.webp";
import excel from "../../public/excel.webp";
import family from "../../public/family.webp";
import microsoftaccount from "../../public/microsoftaccount.webp";
import officelogoDark from "../../public/officelogo-dark.webp";
import officelogoLight from "../../public/officelogo-light.webp";
import xbox from "../../public/xbox.webp";
import { ChakraNextLink } from "../components/ChakraNextLink";

export const headerLinks = [
] as const;

export interface SocialLink {
  name: string
  href: string
  icon: IconType
}

export const socialLinks: { [key: string]: SocialLink } = {
  linkedin: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/carles2m",
    icon: FaLinkedin
  },
  github: {
    name: "GitHub",
    href: "https://github.com/carles2m",
    icon: FaGithub
  }
} as const;

export interface Project {
  year: number
  name: string
  image: StaticImageData | string
  imageDark?: StaticImageData
  content: string | React.ReactElement,
  tags: readonly string[]
}

export const professionalProjects: { [key: string]: Project } = {
  family: {
    year: 2021,
    name: "Microsoft Family Safety",
    image: family,
    content: <Text as="span">I plan the roadmap and supervise the execution of the <Text as="span" display="inline-block"><ChakraNextLink isExternal href="https://family.microsoft.com">Family Safety website</ChakraNextLink></Text></Text>,
    tags: ["ASP.NET MVC 5", "React", "Fluent UI"]
  },
  consentxbox: {
    year: 2018,
    name: "Xbox Parental Consent",
    image: xbox,
    content: "Changed the way parents provide adult verification by using an electronic signature",
    tags: ["ASP.NET MVC 5", "AngularJs", "MWF"]
  },
  amc: {
    year: 2015,
    name: "Microsoft Account",
    image: microsoftaccount,
    content: <Text as="span">Consolidated multiple forms of data in one <ChakraNextLink isExternal href="https://account.microsoft.com/services" aria-label="Microsoft Account">website</ChakraNextLink> for users to manage all Microsoft subscriptions</Text>,
    tags: ["ASP.NET MVC 5", "AngularJs", "MWF"]
  },
  excelOnline: {
    year: 2013,
    name: "Microsoft Excel Online",
    image: excel,
    content: <Text as="span">Implemented <ChakraNextLink isExternal href="https://support.microsoft.com/office/outline-group-data-in-a-worksheet-08ce98c4-0063-4d42-8ac7-8278c49e9aff">outlines</ChakraNextLink> and the <ChakraNextLink isExternal href="https://support.microsoft.com/office/undo-redo-or-repeat-an-action-84bdb9bc-4e23-4f06-ba78-f7b893eb2d28">undo/redo</ChakraNextLink> functionality to <Text as="span" display="inline-block">Microsoft Excel for the web</Text></Text>,
    tags: ["ASP.NET", "Script#", "C++"]
  },
  office365: {
    year: 2010,
    name: "Microsoft Office 365",
    image: officelogoLight,
    imageDark: officelogoDark,
    content: <Text as="span">Built the first websites to <Text as="em">purchase</Text> and <Text as="em">manage</Text> consumer <Text as="span" display="inline-block">Microsoft Office 365 subscriptions</Text></Text>,
    tags: ["ASP.NET", "jQuery"]
  },
} as const;

export const personalProjects: { [key: string]: Project } = {
  carles2m: {
    year: 2021,
    name: "carles2m.com",
    image: "👋",
    content: "This website you are watching. Responsive, fully accessible, and also works offline. Try it!",
    tags: ["Next.js", "Chakra UI"]
  },
  advanced21: {
    year: 2020,
    name: "Advanced 21 Blackjack",
    image: advanced21,
    content: "The most realistic way to play Blackjack without having to set foot in a casino",
    tags: ["Android", "iOS", "Unity 3d"]
  },
  barcelonaBus: {
    year: 2014,
    name: "Barcelona Bus",
    image: bus,
    content: "Get realtime bus time arrivals, find bus stops, and see bus lines in an interactive map",
    tags: ["Windows Phone", "Node.js", "MongoDB"]
  },
} as const;