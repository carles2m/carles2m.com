import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { SocialLink } from "../lib/content-types";
import { getYear } from "../lib/dateUtil";
import { reportClick } from "../lib/gtag";

interface FooterProps {
  profileName: string,
  links: { [key: string]: SocialLink }
}

export const Footer: React.FC<FooterProps> = ({
  profileName,
  links
}) => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(getYear());

    const interval = setInterval(() => {
      setYear(getYear());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      as="footer"
      w="full"
      mt="auto"
      pt={6}
    >
      <Divider />
      <Flex
        maxW="6xl"
        ml="auto"
        mr="auto"
        p={4}
        pb={{ base: 2, md: 4 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        gridGap={1}
      >
        <Text>{`© ${year ?? ""} ${profileName}`}</Text>
        <Spacer />
        <HStack spacing={4}>
          {Object.values(links).map((link) => (
            <SocialButton key={link.name} link={link} />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

interface SocialButtonProps {
  link: SocialLink
}

const SocialButton: React.FC<SocialButtonProps> = ({
  link
}) => (
  <Tooltip label={link.name}>
    <IconButton
      rounded="full"
      as="a"
      href={link.href}
      onClick={() => reportClick(link.href)}
      aria-label={link.name}
      transition="background 0.3s ease"
      bg="unset"
      _hover={{
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      icon={<link.icon />}
    />
  </Tooltip>
);