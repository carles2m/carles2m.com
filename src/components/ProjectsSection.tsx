import {
  Flex,
  Heading,
  Stack
} from "@chakra-ui/react";
import React from "react";

import { Project } from "../lib/constants";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC<{
  id: string
  title: string
  projects: { [key: string]: Project }
}> = ({
  id,
  title,
  projects
}) => (
    <Stack spacing="0.5rem" as="section" aria-labelledby={id}>
      <Heading as="h2" id={id}>{title}</Heading>

      <Flex
        wrap="wrap"
        justifyContent="space-evenly"
      >
        {Object.values(projects).sort((p1, p2) => p2.year - p1.year).map(project => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </Flex>
    </Stack>
  );