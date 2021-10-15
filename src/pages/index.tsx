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

const Index: NextPage = () => {
  const day = new Date().toLocaleString("en-us", { weekday: "long" });

  return (
    <Container height="100vh">
      <Header />
      <Main>
        <Heading>
          Happy {day}! I&apos;m Carles Moreno
        </Heading>

        <Text>
          I&apos;m a Software Engineer Manager at <Link isExternal href="https://www.microsoft.com">Microsoft</Link>.
        </Text>
      </Main>

      <Footer />
    </Container>
  );
};

export default Index;
