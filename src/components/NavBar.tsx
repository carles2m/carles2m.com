import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Image,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { ReactNode } from "react";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}>
        {children}
    </Link>
);

export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bgColor = useColorModeValue("gray.100", "gray.800");

    return (
        <Box bg={bgColor} px={4} w="full">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                    bg={bgColor}
                />
                <HStack spacing={8} alignItems={"center"}>
                    <Popover trigger="hover">
                        <PopoverTrigger>
                            <Avatar src="profile.jpg" alt="Carles Moreno" />
                        </PopoverTrigger>
                        <PopoverContent>
                            <Image src="profile.jpg" alt="Carles Moreno" />
                        </PopoverContent>
                    </Popover>
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                </HStack>

                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={7}>
                        <Button onClick={toggleColorMode} bg={bgColor}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};