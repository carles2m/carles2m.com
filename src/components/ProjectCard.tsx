import {
  Badge,
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  usePrefersReducedMotion,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useInView } from "react-intersection-observer";

import { scaleInCenter } from "../lib/animations";
import { Project } from "../lib/content-types";
import { ChakraNextImage } from "./ChakraNextImage";

export const cardImageBoxSize = 320;

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project
}) => {
  const image = useColorModeValue(project.image, project.imageDark ?? project.image);

  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    fallbackInView: true
  });

  const imageElement = typeof image === "string"
    ? (
      <Center
        height={cardImageBoxSize}
        width={cardImageBoxSize}
        fontSize="9xl"
      >
        {image}
      </Center>
    )
    : (
      <ChakraNextImage
        roundedTop="lg"
        boxSize={`${cardImageBoxSize - 2}px`}
        src={image}
        alt=""
        placeholder="blur"
      />
    );

  return (
    <Center
      ref={ref}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="xs"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        visibility={inView || prefersReducedMotion ? "visible" : "hidden"}
        css={inView && !prefersReducedMotion ? scaleInCenter : undefined}
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