import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { reportClick } from "../lib/gtag";

export const ChakraNextLink = ({ children, href, ...rest }) => (
  <Link as={NextLink} href={href} onClick={() => reportClick(href)} {...rest}>
    {children}
  </Link>
);