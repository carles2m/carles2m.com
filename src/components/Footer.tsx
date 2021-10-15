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
import React from "react";
import { socialLinks } from "../lib/constants";

const SocialButton = ({
  label,
  href,
  icon
}: {
  label: string;
  href: string;
  icon: React.ReactElement;
}) => (
  <Tooltip label={label}>
    <IconButton
      rounded="full"
      as="a"
      href={href}
      aria-label={label}
      transition="background 0.3s ease"
      bg="unset"
      _hover={{
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      icon={icon}
    />
  </Tooltip>
);

export const Footer = () => (
  <Box
    as="footer"
    w="full"
    mt="auto"
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
        <Text>© 2021 Carles Moreno</Text>
        <Spacer />
        <HStack spacing={4}>
          {Object.values(socialLinks).map(({ name, href, icon: Icon }) => (
            <SocialButton key={name} label={name} href={href} icon={<Icon />} />
          ))}
        </HStack>
      </Flex>
    </Box>
  </Box>
);