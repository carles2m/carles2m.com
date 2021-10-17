import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import React from "react";
import {
    Text,
} from "@chakra-ui/react";

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

export const projects: { [key: string]: Project } = {
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
    office2010: {
        year: 2010,
        name: "Microsoft Office 365",
        image: "officelogo-light.webp",
        imageDark: "officelogo-dark.webp",
        content: <Text as="span">Built the first websites to <Text as="em">purchase</Text> and <Text as="em">manage</Text> consumer <Text as="span" display="inline-block">Microsoft Office 365 subscriptions</Text></Text>,
        tags: ["ASP.NET", "jQuery"]
    },
} as const;