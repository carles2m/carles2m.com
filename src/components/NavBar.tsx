import {
    Avatar,
    Box,
    Button,
    Flex,
    Stack,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue("gray.100", "gray.800")} px={4} w="full">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <Avatar src="profile.jpg" alt="Carles Moreno" />

                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={7}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
};