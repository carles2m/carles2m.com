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

export const ProjectCard = ({ project }: { project: Project }) => {
    const image = useColorModeValue(project.image, project.imageDark ?? project.image);

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
                <ChakraNextImage
                    roundedTop="lg"
                    height={320}
                    width={320}
                    objectFit="cover"
                    src={image}
                    alt=""
                    placeholder="blur"
                />

                <VStack p={6} pt={3} spacing={4}>
                    <Heading fontSize="2xl" fontFamily="body">
                        {project.name}
                    </Heading>

                    <Text
                        textAlign="center"
                        color={useColorModeValue("gray.700", "gray.400")}
                        px={3}
                    >
                        {project.content}
                    </Text>

                    <Stack align="center" justify="center" direction="row" mt={6}>
                        {project.tags.map(tag => (
                            <Badge
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