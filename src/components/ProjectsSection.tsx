import React from "react";

import { Project } from "../lib/content-types";
import { ProjectCard } from "./ProjectCard";

type ProjectsSectionProps = {
  id: string;
  index: number;
  title: string;
  projects: { [key: string]: Project };
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  id,
  index,
  title,
  projects,
}) => (
  <section
    className={`flex flex-col gap-4 ${index > 0 ? "pt-2" : ""}`}
    aria-labelledby={id}
  >
    <h2 className="text-3xl font-bold md:text-4xl" id={id}>
      {title}
    </h2>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-items-center gap-6 md:gap-12">
      {Object.values(projects)
        .sort((p1, p2) => p2.year - p1.year)
        .map((project, proj_index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index * 10 + proj_index}
          />
        ))}
    </div>
  </section>
);
