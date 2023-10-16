import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  IconButtonProps,
  Link,
  LinkProps,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  useColorMode
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import React from "react";

import { SocialLink } from "../lib/content-types";
import { reportClick } from "../lib/gtag";
import { ChakraNextImage } from "./ChakraNextImage";

interface HeaderProps {
  profileName: string,
  profilePicture: StaticImageData,
  links: { [key: string]: SocialLink }
}

export const Header: React.FC<HeaderProps> = ({
  profileName,
  profilePicture,
  links
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
            <Box display={{ md: "none" }} />

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

            <HStack spacing={4}>
              {Object.values(links).map((link) => (
                <HeaderButton key={link.name} {...link} />
              ))}
              <HeaderButton
                aria-label="Toggle color mode"
                onClick={toggleColorMode}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              />
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};


const HeaderButton: React.FC<SocialLink | IconButtonProps> = ({ ...props }) => {
  let buttonProps: IconButtonProps;

  if ("href" in props) {
    buttonProps = {
      as: Link,
      "aria-label": props.name,
      onClick: () => reportClick(props.href),
      icon: <props.icon />,
    };

    const linkProps = (buttonProps as unknown as LinkProps);
    linkProps.href = props.href;
    linkProps.isExternal = true;
  }
  else {
    buttonProps = props;
  }

  return (
    <Tooltip label={buttonProps["aria-label"]}>
      <IconButton
        {...buttonProps}
        bg="unset"
        transition="background 0.3s ease"
      />
    </Tooltip>
  );
};