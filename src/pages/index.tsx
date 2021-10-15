import {
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { NextPage } from "next";
import React from "react";
import theme from "../lib/theme";

const Index: NextPage = () => {
  const day = new Date().toLocaleString("en-us", { weekday: "long" });

  return (
    <Container height="100vh">
      <Header />
      <Main>
        <Heading pt="10vh">
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
          I&apos;m a Software Engineer Manager at <Link isExternal href="https://www.microsoft.com">Microsoft</Link>. I am passionate about building websites that can be used by everyone and a gamer 🎮.
        </Text>
      </Main>

      <Footer />
    </Container>
  );
};

export default Index;
