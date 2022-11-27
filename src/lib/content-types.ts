import { StaticImageData } from "next/image";
import React from "react";
import { IconType } from "react-icons/lib";

export interface SocialLink {
  name: string
  href: string
  icon: IconType
}

export interface Project {
  year: number
  name: string
  image: StaticImageData | string
  imageDark?: StaticImageData
  content: string | React.ReactElement,
  tags: readonly string[]
}