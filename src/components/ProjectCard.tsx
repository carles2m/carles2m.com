import {
    Badge,
    Box,
    Center,
    Heading,
    Stack,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import React from "react";

import { Project } from "../lib/constants";
import { ChakraNextImage } from "./ChakraNextImage";

const height = 320;
const width = 320;

export const ProjectCard = ({ project }: { project: Project }) => {
    const image = useColorModeValue(project.image, project.imageDark ?? project.image);

    const imageElement = typeof image === "string"
        ? (
            <Center
                height={height}
                width={width}
                fontSize="9xl"
            >
                {image}
            </Center>
        )
        : (
            <ChakraNextImage
                roundedTop="lg"
                height={height}
                width={width}
                objectFit="cover"
                src={image}
                alt=""
                placeholder="blur"
            />
        );

    return (
        <Center py="2vh" px="1vw">
            <Box
                bg={useColorModeValue("white", "gray.800")}
                maxW="xs"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
            >
                {imageElement}

                <VStack p={6} pt={3} spacing={4}>
                    <Heading fontSize="2xl" fontFamily="body" as="h3">
                        {project.name}
                    </Heading>

                    <Text
                        textAlign="center"
                        color={useColorModeValue("gray.700", "gray.400")}
                        px={3}
                    >
                        {project.content}
                    </Text>

                    <Stack
                        align="center"
                        justify="center"
                        direction="row"
                        mt={6}
                        as="ul"
                    >
                        {project.tags.map(tag => (
                            <Badge
                                as="li"
                                key={tag}
                                px={2}
                                py={1}
                                fontWeight="normal"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </Stack>
                </VStack>
            </Box>
        </Center>
    );
};