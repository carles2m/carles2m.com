import {
  LinkProps,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import advanced21 from "../../public/21.webp";
import bus from "../../public/bus.webp";
import casal from "../../public/casal.webp";
import excel from "../../public/excel.webp";
import family from "../../public/family.webp";
import microsoft365Logo from "../../public/microsoft365logo.webp";
import microsoftAccount from "../../public/microsoftaccount.webp";
import officeLogoDark from "../../public/officelogo-dark.webp";
import officeLogoLight from "../../public/officelogo-light.webp";
import profile from "../../public/profile.webp";
import xbox from "../../public/xbox.webp";
import { ChakraNextLink } from "../components/ChakraNextLink";
import { Project, SocialLink } from "./content-types";


export const profileName = "Carles Moreno";
export const profilePicture = profile;
export const profileDescription = <>I&apos;m a Software Engineer Manager at <ChakraNextLink isExternal href="https://www.microsoft.com">Microsoft</ChakraNextLink>. I am a <Text as="span" display="inline-block">gamer 🎮</Text> passionate about building websites that can be used by everyone.</>;

export const headerLinks: readonly LinkProps[] = [
] as const;

export const professionalProjects: { [key: string]: Project } = {
  m365Growth: {
    year: 2021,
    name: "Microsoft 365 Growth",
    image: microsoft365Logo,
    content: <Text as="span">Supervise the execution to increase Microsoft 365 subscribers across consumers and SMB</Text>,
    tags: [".NET 6", "React", "Fluent UI"]
  },
  family: {
    year: 2021,
    name: "Microsoft Family Safety",
    image: family,
    content: <Text as="span">Plan the roadmap and supervise the execution of the <Text as="span" display="inline-block"><ChakraNextLink isExternal href="https://family.microsoft.com">Family Safety website</ChakraNextLink></Text></Text>,
    tags: ["ASP.NET MVC 5", "React", "Fluent UI"]
  },
  consentXbox: {
    year: 2018,
    name: "Xbox Parental Consent",
    image: xbox,
    content: "Changed the way parents provide adult verification by using an electronic signature",
    tags: ["ASP.NET MVC 5", "AngularJs", "MWF"]
  },
  amc: {
    year: 2015,
    name: "Microsoft Account",
    image: microsoftAccount,
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
    image: officeLogoLight,
    imageDark: officeLogoDark,
    content: <Text as="span">Built the first websites to <Text as="em">purchase</Text> and <Text as="em">manage</Text> consumer <Text as="span" display="inline-block">Microsoft Office 365 subscriptions</Text></Text>,
    tags: ["ASP.NET", "jQuery"]
  },
} as const;

export const personalProjects: { [key: string]: Project } = {
  carles2m: {
    year: 2021,
    name: "carles2m.com",
    image: profile,
    content: "This website you are watching. Responsive, fully accessible, installable and working offline",
    tags: ["Next.js", "Chakra UI", "Vercel"]
  },
  advanced21: {
    year: 2020,
    name: "Advanced 21 Blackjack",
    image: advanced21,
    content: "The most realistic way to play Blackjack without having to set foot in a casino",
    tags: ["Android", "iOS", "Unity 3d"]
  },
  basementSoftware: {
    year: 2020,
    name: "Basement Software",
    image: "BS",
    content: <Text as="span">Website of <ChakraNextLink isExternal href="https://basement.software">Basement Software</ChakraNextLink>, owner of <Text as="span" display="inline-block">Advanced 21 Blackjack</Text> and Wordland games</Text>,
    tags: ["Hugo", "Google Firebase"]
  },
  casalCatalaSeattle: {
    year: 2019,
    name: "Casal Català de Seattle",
    image: casal,
    content: <Text as="span">Official page of the <ChakraNextLink isExternal href="https://www.casalcatalaseattle.org/">Seattle Catalan association</ChakraNextLink>, promoting the culture and Catalan language</Text>,
    tags: ["Hugo", "Google Firebase", "Mailchimp"]
  },
  barcelonaBus: {
    year: 2014,
    name: "Barcelona Bus",
    image: bus,
    content: "Get realtime bus time arrivals, find bus stops, and see bus lines in an interactive map",
    tags: ["Windows Phone", "Node.js", "MongoDB"]
  },
} as const;

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