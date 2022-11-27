import {
  Heading,
  SimpleGrid,
  Stack
} from "@chakra-ui/react";
import React from "react";

import { Project } from "../lib/content-types";
import { cardImageBoxSize, ProjectCard } from "./ProjectCard";

interface ProjectsSectionProps {
  id: string,
  title: string,
  projects: { [key: string]: Project }
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  id,
  title,
  projects
}) => (
    <Stack spacing="1rem" as="section" aria-labelledby={id}>
      <Heading as="h2" id={id}>{title}</Heading>

      <SimpleGrid
        minChildWidth={cardImageBoxSize}
        spacing={12}
      >
        {Object.values(projects).sort((p1, p2) => p2.year - p1.year).map(project => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );