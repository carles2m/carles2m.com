import {
  createStandaloneToast,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

import { ChakraNextLink } from "../components/ChakraNextLink";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ProjectsSection } from "../components/ProjectsSection";
import { personalProjects, professionalProjects } from "../lib/constants";
import { getWeekDay, minuteInMs } from "../lib/dateUtil";
import { theme } from "../lib/theme";

const Index: NextPage = () => {
  const [day, setDay] = useState(getWeekDay());
  const toast = createStandaloneToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setDay(getWeekDay());
    }, minuteInMs);

    return () => clearInterval(interval);
  }, []);

  if (typeof (navigator) !== "undefined" && "serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(() => {
      toast({
        title: <Text as="span"><ChakraLink variant="bw" textDecor="underline" isExternal href="https://developer.mozilla.org/docs/Web/Progressive_web_apps">PWA</ChakraLink> active</Text>,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    });
  }

  return (
    <Container>
      <Header />
      <Main>
        <Heading as="h1" size="2xl" pt="2rem">
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
          I&apos;m a Software Engineer Manager at <ChakraNextLink isExternal href="https://www.microsoft.com">Microsoft</ChakraNextLink>. I am a <Text as="span" display="inline-block">gamer 🎮</Text> passionate about building websites that can be used by everyone.
        </Text>

        <ProjectsSection
          id="experience"
          title="Experience"
          projects={professionalProjects}
        />

        <ProjectsSection
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
