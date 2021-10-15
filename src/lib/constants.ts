import { FaGithub, FaLinkedin } from "react-icons/fa";

export const headerLinks = [
] as const;

export const socialLinks = {
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

export const projects = {
    advanced21: {
        name: "Advanced 21 Blackjack",
        image: "21.webp",
        content: "The most realistic way to play Blackjack without having to set foot in a casino",
        tags: ["Android", "iOS", "Unity3d"]
    },
    barcelonaBus: {
        name: "Barcelona Bus",
        image: "bus.webp",
        content: "Get realtime bus time arrivals, find bus stops, and see bus lines in an interactive map",
        tags: ["Windows Phone", "NodeJS", "MongoDB"]
    },
} as const;