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
import React from "react";


export const ProjectCard = ({
    name,
    image,
    content,
    tags
}: {
    name: string
    image: string
    content: string | React.ReactElement,
    tags: readonly string[]
}) => (
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
                    backgroundImage: `url(${image})`,
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
                    src={image}
                    alt=""
                />
            </Box>

            <VStack pt={12} spacing={4}>
                <Heading fontSize="2xl" fontFamily="body">
                    {name}
                </Heading>

                <Text
                    textAlign="center"
                    color={useColorModeValue("gray.700", "gray.400")}
                    px={3}>
                    {content}
                </Text>

                <Stack align="center" justify="center" direction="row" mt={6}>
                    {tags.map(tag => (
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