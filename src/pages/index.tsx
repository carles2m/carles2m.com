import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ProjectCard } from "../components/ProjectCard";
import { personalProjects, professionalProjects, Project } from "../lib/constants";
import { getWeekDay } from "../lib/dateUtil";
import * as serviceWorker from "../lib/serviceWorker";
import theme from "../lib/theme";

const Section: React.FC<{
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

const Index: NextPage = () => {
  const [day, setDay] = useState(getWeekDay());

  useEffect(() => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorker.unregister();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDay(getWeekDay());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Heading as="h1" size="2xl" pt="4vh">
          {`Happy ${day}! `}
          <Text
            as="span"
            bgGradient={`linear(to-r, ${theme.colors.red[500]}, ${theme.colors.purple[500]})`}
            bgClip="text"
            display="inline-block"
          >
            I&apos;m Carles Moreno
          </Text>
        </Heading>

        <Text fontSize="2xl">
          I&apos;m a Software Engineer Manager at <Link isExternal href="https://www.microsoft.com">Microsoft</Link>. I am passionate about building websites that can be used by everyone and a <Text as="span" display="inline-block">gamer 🎮.</Text>
        </Text>

        <Section
          id="experience"
          title="Experience"
          projects={professionalProjects}
        />

        <Section
          id="projects"
          title="Personal Projects"
          projects={personalProjects}
        />
      </Main>

      <Footer />
    </Container>
  );
};

export default Index;
