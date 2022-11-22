import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

import { reportClick } from "../lib/gtag";

export const ChakraNextLink = ({ children, href, ...rest }) => (
  <NextLink href={href} passHref legacyBehavior>
    <ChakraLink onClick={() => reportClick(href)} {...rest}>{children}</ChakraLink>
  </NextLink>
);