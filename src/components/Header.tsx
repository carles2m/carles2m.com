import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    Image,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Portal,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";

import { headerLinks } from "../lib/constants";

const NavLink = ({
    children
}: {
    children: React.ReactNode
}) => (
    <Box
        as="li"
        listStyleType="none"
    >
        <Link
            px={2}
            py={1}
            rounded="md"
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
            href="#"
            transition="background 0.3s ease"
        >
            {children}
        </Link>
    </Box>
);

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            as="header"
            top={0}
            position="sticky"
            zIndex="docked"
            backdropFilter="saturate(180%) blur(20px) contrast(90%)"
            w="full"
            boxShadow="2xl"
        >
            <Box
                align="center"
                w="full"
            >
                <Box
                    px={4}
                    maxW="6xl"
                >
                    <Flex h={16} alignItems="center" justifyContent="space-between">
                        <Box display={{ md: "none" }} minW="48px">
                            {!!headerLinks.length && <Button
                                onClick={isOpen ? onClose : onOpen}
                                bg="unset"
                                aria-label="Open Menu"
                                display={{ md: "none" }}
                                transition="background 0.3s ease"
                            >
                                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            </Button>}
                        </Box>

                        <HStack spacing={8} alignItems="center">
                            <Popover trigger="hover" isLazy>
                                <PopoverTrigger>
                                    <Image
                                        borderRadius="full"
                                        src="profile.webp"
                                        alt="Carles Moreno"
                                        htmlHeight="48px"
                                        htmlWidth="48px"
                                    />
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent>
                                        <Image
                                            src="profile.webp"
                                            alt="Carles Moreno"
                                            htmlHeight="512px"
                                            htmlWidth="512px"
                                        />
                                    </PopoverContent>
                                </Portal>
                            </Popover>
                            <Box
                                as="nav"
                                display={{ base: "none", md: "flex" }}
                            >
                                <HStack
                                    as="ul"
                                    spacing={4}
                                >
                                    {headerLinks.map((link) => (
                                        <NavLink key={link}>{link}</NavLink>
                                    ))}
                                </HStack>
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

                    {isOpen ? (
                        <Box
                            as="nav"
                            pb={4}
                            display={{ md: "none" }}
                        >
                            <Stack
                                as="ul"
                                pt={4}
                                spacing={4}
                            >
                                {headerLinks.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </Stack>
                        </Box>
                    ) : null}
                </Box>
            </Box>
        </Box>
    );
};