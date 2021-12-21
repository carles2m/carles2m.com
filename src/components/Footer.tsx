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

import { SocialLink, socialLinks } from "../lib/constants";
import { getYear } from "../lib/dateUtil";
import { reportClick } from "../lib/gtag";

const SocialButton: React.FC<{ link: SocialLink }> = ({ link }) => (
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

export const Footer: React.FC = () => {
  const [year, setYear] = useState(getYear());

  useEffect(() => {
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
      <Box
        align="center"
      >
        <Divider />
        <Flex
          maxW="6xl"
          p={4}
          pb={{ base: 2, md: 4 }}
          direction={{ base: "column", md: "row" }}
          align="center"
          gridGap={1}
        >
          <Text>{`© ${year} Carles Moreno`}</Text>
          <Spacer />
          <HStack spacing={4}>
            {Object.values(socialLinks).map((link) => (
              <SocialButton key={link.name} link={link} />
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};
