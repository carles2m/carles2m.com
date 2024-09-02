import React from "react";
import {
  PiGithubLogo,
  PiLinkedinLogo,
  PiLinktreeLogo,
  PiMoon,
  PiSun,
} from "react-icons/pi"; // use all icons from the same set to have a uniform size

import profile from "../../public/profile.webp";
import advanced21 from "../../public/projects/21.webp";
import bus from "../../public/projects/bus.webp";
import casal from "../../public/projects/casal.webp";
import excel from "../../public/projects/excel.webp";
import family from "../../public/projects/family.webp";
import linktree from "../../public/projects/linktree.webp";
import microsoft365Logo from "../../public/projects/microsoft365logo.webp";
import microsoftAccount from "../../public/projects/microsoftaccount.webp";
import officeLogoDark from "../../public/projects/officelogo-dark.webp";
import officeLogoLight from "../../public/projects/officelogo-light.webp";
import xbox from "../../public/projects/xbox.webp";
import { Link } from "../components/Link";
import { Project, SocialLink } from "./content.types";

export { PiMoon, PiSun };

export const firstName = "Carles";
export const lastName = "Moreno";
export const twitterHandle = "@carles2m";

export const profileName = `${firstName} ${lastName}`;
export const profilePicture = profile;
export const profileDescription = (
  <>
    I&apos;m a <span className="inline-block">Software Engineer</span>{" "}
    passionate about building websites that can be used by everyone and a{" "}
    <span className="inline-block">gamer 🎮</span>
  </>
);

export const title = profileName;
export const description = `${profileName}'s personal site, where his projects, skills and experience are displayed`;
export const url = "https://carles2m.com";

export const professionalProjects: { [key: string]: Project } = {
  linktree: {
    year: 2023,
    name: "Linktree Growth",
    image: linktree,
    content:
      "Leading the effort to increase the number of users that convert to a paid plan",
    tags: ["Symfony", "React", "Tailwind CSS"],
  },
  m365Growth: {
    year: 2021,
    name: "Microsoft 365 Growth",
    image: microsoft365Logo,
    content:
      "Supervised the execution to increase Microsoft 365 subscribers across consumers and SMB",
    tags: [".NET 6", "React", "Fluent UI"],
  },
  family: {
    year: 2021,
    name: "Microsoft Family Safety",
    image: family,
    content: (
      <span>
        Planned the roadmap and supervised the execution of the{" "}
        <Link
          className="hyperlink inline-block"
          isExternal
          href="https://family.microsoft.com"
        >
          Family Safety website
        </Link>
      </span>
    ),
    tags: ["ASP.NET MVC 5", "React", "Fluent UI"],
  },
  consentXbox: {
    year: 2018,
    name: "Xbox Parental Consent",
    image: xbox,
    content:
      "Changed the way parents provide adult verification by using an electronic signature",
    tags: ["ASP.NET MVC 5", "AngularJs", "MWF"],
  },
  amc: {
    year: 2015,
    name: "Microsoft Account",
    image: microsoftAccount,
    content: (
      <span>
        Consolidated multiple forms of data in one{" "}
        <Link
          className="hyperlink inline-block"
          isExternal
          href="https://account.microsoft.com/services"
          aria-label="Microsoft Account"
        >
          website
        </Link>{" "}
        for users to manage all Microsoft subscriptions
      </span>
    ),
    tags: ["ASP.NET MVC 5", "AngularJs", "MWF"],
  },
  excelOnline: {
    year: 2013,
    name: "Microsoft Excel Online",
    image: excel,
    content: (
      <span>
        Implemented{" "}
        <Link
          className="hyperlink inline-block"
          isExternal
          href="https://support.microsoft.com/office/outline-group-data-in-a-worksheet-08ce98c4-0063-4d42-8ac7-8278c49e9aff"
        >
          outlines
        </Link>{" "}
        and the{" "}
        <Link
          className="hyperlink inline-block"
          isExternal
          href="https://support.microsoft.com/office/undo-redo-or-repeat-an-action-84bdb9bc-4e23-4f06-ba78-f7b893eb2d28"
        >
          undo/redo
        </Link>{" "}
        functionality in{" "}
        <span className="inline-block">Microsoft Excel for the web</span>
      </span>
    ),
    tags: ["ASP.NET", "Script#", "C++"],
  },
  office365: {
    year: 2010,
    name: "Microsoft Office 365",
    image: officeLogoLight,
    imageDark: officeLogoDark,
    content: (
      <span>
        Built the first websites to <em>purchase</em> and <em>manage</em>{" "}
        consumer{" "}
        <span className="inline-block">Microsoft Office 365 subscriptions</span>
      </span>
    ),
    tags: ["ASP.NET", "jQuery"],
  },
} as const;

export const personalProjects: { [key: string]: Project } = {
  carles2m: {
    year: 2021,
    name: "carles2m.com",
    image: profile,
    content:
      "This website you are watching. Responsive, fully accessible and installable",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  advanced21: {
    year: 2020,
    name: "Advanced 21 Blackjack",
    image: advanced21,
    content:
      "The most realistic way to play Blackjack without having to set foot in a casino",
    tags: ["Android", "iOS", "Unity 3d"],
  },
  basementSoftware: {
    year: 2020,
    name: "Basement Software",
    image: "BS",
    content: (
      <span>
        Website of{" "}
        <Link className="hyperlink" isExternal href="https://basement.software">
          Basement Software
        </Link>
        , owner of <span className="inline-block">Advanced 21 Blackjack</span>{" "}
        and Wordland games
      </span>
    ),
    tags: ["Hugo", "Google Firebase"],
  },
  casalCatalaSeattle: {
    year: 2019,
    name: "Casal Català de Seattle",
    image: casal,
    content: (
      <span>
        Official page of the{" "}
        <Link
          className="hyperlink"
          isExternal
          href="https://www.casalcatalaseattle.org/"
        >
          Seattle Catalan association
        </Link>
        , promoting the Catalan culture and language
      </span>
    ),
    tags: ["Hugo", "Google Firebase", "Mailchimp"],
  },
  barcelonaBus: {
    year: 2014,
    name: "Barcelona Bus",
    image: bus,
    content:
      "Get realtime bus time arrivals, find bus stops, and see bus lines in an interactive map",
    tags: ["Windows Phone", "Node.js", "MongoDB"],
  },
} as const;

export const socialLinks: { [key: string]: SocialLink } = {
  linktree: {
    name: "Linktree",
    href: "https://linktr.ee/carles2m",
    Icon: PiLinktreeLogo,
  },
  linkedin: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/carles2m",
    Icon: PiLinkedinLogo,
  },
  github: {
    name: "GitHub",
    href: "https://github.com/carles2m",
    Icon: PiGithubLogo,
  },
} as const;
