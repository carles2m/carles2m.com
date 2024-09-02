import React from "react";
import { useInView } from "react-intersection-observer";

import { Project } from "../lib/content.types";
import { ProjectCardBadges } from "./ProjectCard.Badges";
import { ProjectCardImage, ProjectCardImageProps } from "./ProjectCard.Image";

export type ProjectCardProps = Pick<ProjectCardImageProps, "index"> & {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    fallbackInView: true,
    initialInView: true, // set to true to make the component visible when JavaScript is disabled
  });

  return (
    <div
      ref={ref}
      className={`${inView ? "animate-boom motion-reduce:animate-none" : "invisible motion-reduce:visible"} relative flex max-w-80 flex-col justify-between rounded-lg border border-gray-200 bg-white shadow-lg dark:border-white/15 dark:bg-gray-800`}
    >
      <ProjectCardImage
        index={index}
        image={project.image}
        imageDark={project.imageDark}
      />

      <div className="flex h-full flex-col justify-between gap-4 px-6 py-3 text-center">
        <h3 className="text-2xl font-bold">{project.name}</h3>

        <span className="text-balance px-1 text-gray-700 dark:text-gray-400">
          {project.content}
        </span>

        <ProjectCardBadges tags={project.tags} />
      </div>
    </div>
  );
};
