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
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";

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
    w="full"
    align="center"
    mt="auto"
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
        <SocialButton label="Twitter" href="#" icon={<FaTwitter />} />
        <SocialButton label="YouTube" href="#" icon={<FaYoutube />} />
        <SocialButton label="Instagram" href="#" icon={<FaInstagram />} />
      </HStack>
    </Flex>
  </Box>
);