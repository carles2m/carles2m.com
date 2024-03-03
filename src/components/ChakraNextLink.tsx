import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const ChakraNextLink = ({ children, href, ...rest }) => (
  <Link as={NextLink} href={href} {...rest}>
    {children}
  </Link>
);