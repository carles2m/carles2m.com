import * as serviceWorker from "../lib/serviceWorker";
import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { personalProjects, professionalProjects } from "../lib/constants";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { NextPage } from "next";
import { ProjectCard } from "../components/ProjectCard";
import theme from "../lib/theme";

const Index: NextPage = () => {
  useEffect(() => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorker.unregister();
  }, []);

  const day = new Date().toLocaleString("en-us", { weekday: "long" });

  return (
    <Container>
      <Header />
      <Main>
        <Heading as="h1" size="2xl" pt="4vh">
          Happy {day}!{" "}
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

        <Stack spacing="0.5rem">
          <Heading as="h2">Professional Projects</Heading>

          <Flex
            wrap="wrap"
            justifyContent="space-evenly"
          >
            {Object.values(professionalProjects).sort((p1, p2) => p2.year - p1.year).map(project => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))}
          </Flex>
        </Stack>

        <Stack spacing="0.5rem">
          <Heading as="h2">Personal Projects</Heading>

          <Flex
            wrap="wrap"
            justifyContent="space-evenly"
          >
            {Object.values(personalProjects).sort((p1, p2) => p2.year - p1.year).map(project => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))}
          </Flex>
        </Stack>
      </Main>

      <Footer />
    </Container>
  );
};

export default Index;
