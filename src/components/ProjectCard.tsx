import {
    Badge,
    Box,
    Center,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react";
import { Project } from "../lib/constants";
import React from "react";

export const ProjectCard = ({ project }: { project: Project }) => {
    const imageSrc = useColorModeValue(project.image, project.imageDark ?? project.image);

    return (
        <Center py="2vh" px="1vw" >
            <Box
                role="group"
                p={6}
                maxW="330px"
                w="full"
                bg={useColorModeValue("white", "gray.800")}
                boxShadow="2xl"
                rounded="lg"
                pos="relative"
                zIndex={1}
            >
                <Box
                    rounded="lg"
                    pos="relative"
                    height="230px"
                    _after={{
                        transition: "all .3s ease",
                        content: "\"\"",
                        w: "full",
                        h: "full",
                        pos: "absolute",
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${imageSrc})`,
                        filter: "blur(15px)",
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: "blur(20px)",
                        },
                    }}
                >
                    <Image
                        rounded="lg"
                        height={240}
                        htmlHeight={240}
                        width={300}
                        htmlWidth={300}
                        objectFit="cover"
                        src={imageSrc}
                        alt=""
                    />
                </Box>

                <VStack pt={12} spacing={4}>
                    <Heading fontSize="2xl" fontFamily="body">
                        {project.name}
                    </Heading>

                    <Text
                        textAlign="center"
                        color={useColorModeValue("gray.700", "gray.400")}
                        px={3}>
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