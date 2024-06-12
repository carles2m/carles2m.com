import { ImageProps } from "next/image";
import React from "react";
import { IconType } from "react-icons";

export type SocialLink = {
  name: string;
  href: string;
  Icon?: IconType;
}

export type Project = {
  year: number;
  name: string;
  image: ImageProps["src"];
  imageDark?: ImageProps["src"];
  content: string | React.ReactElement;
  tags: readonly string[];
}