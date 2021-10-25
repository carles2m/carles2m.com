import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import { ChakraNextLink } from "../components/ChakraNextLink";

const Offline = () => (
    <>
        <Head>
            <title>Carles Moreno</title>
        </Head>
        <Center h="100vh">
            <VStack spacing={4}>
                <Heading as="h1">😵 Looks like you are offline</Heading>
                <Text>Try going <ChakraNextLink href="/">here</ChakraNextLink> when you are back online</Text>
            </VStack>
        </Center>
    </>
);

export default Offline;