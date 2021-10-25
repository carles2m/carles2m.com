import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export const ChakraNextLink = ({ children, href, ...rest }) => (
    <NextLink href={href} passHref>
        <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
);