import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ProjectsSection } from "../components/ProjectsSection";
import { appear } from "../lib/animations";
import { personalProjects, professionalProjects, profileDescription, profileName, profilePicture, socialLinks } from "../lib/content";
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

  const themeColor = useColorModeValue(theme.colors.gray[50], theme.colors.gray[900]);

  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="theme-color" content={themeColor} />
      </Head>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        minH="100vh"
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("black", "white")}
      >
        <Header profileName={profileName} profilePicture={profilePicture} />
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
              I&apos;m {profileName}
            </Text>
          </Heading>

          <Text fontSize="2xl">
            {profileDescription}
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

        <Footer profileName={profileName} links={socialLinks} />
      </Flex>
    </>
  );
};

// use `getServerSideProps` in actual page
export { getServerSideProps } from "../components/Chakra";

export default Index;
