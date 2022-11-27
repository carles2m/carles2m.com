import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorMode
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import React from "react";

import { ChakraNextImage } from "./ChakraNextImage";

interface HeaderProps {
  profileName: string,
  profilePicture: StaticImageData
}

export const Header: React.FC<HeaderProps> = ({
  profileName,
  profilePicture
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      top={0}
      position="sticky"
      zIndex="sticky"
      backdropFilter="saturate(180%) blur(20px) contrast(90%)"
      w="full"
      boxShadow="2xl"
    >
      <Box
        w="full"
      >
        <Box
          maxW="6xl"
          ml="auto"
          mr="auto"
          px={4}
        >
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Box display={{ md: "none" }} minW="48px" />

            <HStack spacing={8} alignItems="center">
              <Box>
                <Popover trigger="hover" isLazy>
                  <PopoverTrigger>
                    <Flex alignItems="center">
                      <ChakraNextImage
                        borderRadius="full"
                        src={profilePicture}
                        alt={profileName}
                        boxSize="48px"
                        placeholder="blur"
                      />
                    </Flex>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <ChakraNextImage
                      src={profilePicture}
                      alt={profileName}
                    />
                  </PopoverContent>
                </Popover>
              </Box>
            </HStack>

            <Flex alignItems="center">
              <Stack direction="row" spacing={7}>
                <Button
                  onClick={toggleColorMode}
                  bg="unset"
                  aria-label="Toggle color mode"
                  transition="background 0.3s ease"
                >
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};