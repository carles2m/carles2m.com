import React from "react";

import { Project } from "../lib/content.types";

type ProjectCardBadgesProps = Pick<Project, "tags">;

export const ProjectCardBadges = ({ tags }: ProjectCardBadgesProps) => {
  return (
    <ul className="mb-2 mt-4 flex flex-row items-center justify-center gap-2">
      {tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </ul>
  );
};

const Badge = ({ children }: React.PropsWithChildren) => {
  return (
    <li className="inline-block whitespace-nowrap rounded-sm bg-gray-200 px-2 py-1 text-xs uppercase text-gray-800 dark:bg-gray-700 dark:text-gray-200">
      {children}
    </li>
  );
};
