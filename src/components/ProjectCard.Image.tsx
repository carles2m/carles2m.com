import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

import { Project } from "../lib/content.types";

export type ProjectCardImageProps = Pick<Project, "image" | "imageDark"> & {
  index: number;
};

export const ProjectCardImage = ({
  image,
  imageDark,
  index,
}: ProjectCardImageProps) => {
  const { resolvedTheme } = useTheme();

  if (typeof image === "string") {
    return (
      <div className="flex min-h-[320px] items-center justify-center text-9xl">
        {image}
      </div>
    );
  }

  const resolvedImage =
    resolvedTheme == "light" ? "image" : imageDark ? "imageDark" : "image";

  // have both images in the DOM at all times to avoid the browser re-fetch the other image when changing themes
  return (
    <>
      <CardImage
        imageId="image"
        resolvedId={resolvedImage}
        image={image}
        index={index}
      />

      {imageDark && (
        <CardImage
          imageId="imageDark"
          resolvedId={resolvedImage}
          image={imageDark}
          index={index}
        />
      )}
    </>
  );
};

type CardImageProps = Omit<ProjectCardImageProps, "imageDark"> & {
  imageId: string;
  resolvedId: string;
};

const CardImage = ({ imageId, resolvedId, image, index }: CardImageProps) => {
  return (
    <Image
      className={`rounded-t-lg ${resolvedId == imageId ? "" : "hidden"}`}
      src={image}
      alt=""
      height={320}
      width={320}
      priority={index < 2 && resolvedId == imageId}
    />
  );
};
