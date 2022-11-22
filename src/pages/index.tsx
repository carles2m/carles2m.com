import {
  Box,
  Heading,
  Text,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";

import { ChakraNextLink } from "../components/ChakraNextLink";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ProjectsSection } from "../components/ProjectsSection";
import { appear } from "../lib/animations";
import { personalProjects, professionalProjects } from "../lib/constants";
import { getWeekDay, minuteInMs } from "../lib/dateUtil";
import { theme } from "../lib/theme";

const Index: NextPage = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [day, setDay] = useState(null);

  useEffect(() => {
    setDay(getWeekDay());

    const interval = setInterval(() => {
      setDay(getWeekDay());
    }, minuteInMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Heading as="h1" size="2xl" pt="2rem">
          {day &&
            <Box display="inline-block" css={!prefersReducedMotion ? appear : undefined}>
              <Text as="span">Happy {day}!&nbsp;</Text>
            </Box>
          }
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

// use `getServerSideProps` in actual page
import { getServerSideProps as getServerSideCookieProps } from "../lib/Chakra";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookieProps = await getServerSideCookieProps(context);

  return {
    props: {
      ...cookieProps,
    },
  };
};

export default Index;
