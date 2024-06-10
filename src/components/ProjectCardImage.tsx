import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

import { ProjectCardProps } from "./ProjectCard";

type ProjectCardImageProps = Pick<ProjectCardProps, "index" | "project">;

export const ProjectCardImage = ({ project, index }: ProjectCardImageProps) => {
  const { resolvedTheme } = useTheme();

  if (typeof project.image === "string") {
    return (
      <div className="flex min-h-[320px] items-center justify-center text-9xl">
        {project.image}
      </div>
    );
  }

  const image =
    resolvedTheme == "light"
      ? project.image
      : project.imageDark ?? project.image;

  return (
    <Image
      className="rounded-t-lg"
      src={image}
      alt=""
      height={320}
      width={320}
      priority={index < 2}
    />
  );
};
