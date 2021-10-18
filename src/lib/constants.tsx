import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
    Link,
    Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import React from "react";

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
    image: string
    imageDark?: string
    content: string | React.ReactElement,
    tags: readonly string[]
}

export const professionalProjects: { [key: string]: Project } = {
    family: {
        year: 2021,
        name: "Microsoft Family Safety",
        image: "family.webp",
        content: <Text as="span">I plan the roadmap and supervise the execution of the <Text as="span" display="inline-block"><Link isExternal href="https://family.microsoft.com">Family Safety website</Link></Text></Text>,
        tags: ["ASP.NET MVC5", "ReactJs", "FluentUI"]
    },
    consentxbox: {
        year: 2018,
        name: "Xbox Parental Consent",
        image: "xbox.webp",
        content: "Changed the way parents provide adult verification by using an electronic signature",
        tags: ["ASP.NET MVC 5", "AngularJs", "MWF"]
    },
    amc: {
        year: 2015,
        name: "Microsoft Account",
        image: "microsoftaccount.webp",
        content: <Text as="span">Consolidated multiple forms of data in one <Link isExternal href="https://account.microsoft.com/services">website</Link> for the management of all Microsoft subscriptions</Text>,
        tags: ["ASP.NET MVC 5", "AngularJs", "MWF"]
    },
    excelOnline: {
        year: 2013,
        name: "Microsoft Excel Online",
        image: "excel.webp",
        content: <Text as="span">Implemented <Link isExternal href="https://support.microsoft.com/office/outline-group-data-in-a-worksheet-08ce98c4-0063-4d42-8ac7-8278c49e9aff">outlines</Link> and the <Link isExternal href="https://support.microsoft.com/office/undo-redo-or-repeat-an-action-84bdb9bc-4e23-4f06-ba78-f7b893eb2d28">undo/redo</Link> functionality to <Text as="span" display="inline-block">Microsoft Excel for the web</Text></Text>,
        tags: ["ASP.NET", "Script#", "C++"]
    },
    office365: {
        year: 2010,
        name: "Microsoft Office 365",
        image: "officelogo-light.webp",
        imageDark: "officelogo-dark.webp",
        content: <Text as="span">Built the first websites to <Text as="em">purchase</Text> and <Text as="em">manage</Text> consumer <Text as="span" display="inline-block">Microsoft Office 365 subscriptions</Text></Text>,
        tags: ["ASP.NET", "jQuery"]
    },
} as const;



export const personalProjects: { [key: string]: Project } = {
    advanced21: {
        year: 2020,
        name: "Advanced 21 Blackjack",
        image: "21.webp",
        content: "The most realistic way to play Blackjack without having to set foot in a casino",
        tags: ["Android", "iOS", "Unity3d"]
    },
    barcelonaBus: {
        year: 2014,
        name: "Barcelona Bus",
        image: "bus.webp",
        content: "Get realtime bus time arrivals, find bus stops, and see bus lines in an interactive map",
        tags: ["Windows Phone", "NodeJS", "MongoDB"]
    },
} as const;