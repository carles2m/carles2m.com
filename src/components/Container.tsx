import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const Container: React.FC<FlexProps> = (props) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    minH="100vh"
    bg={useColorModeValue("gray.50", "gray.900")}
    color={useColorModeValue("black", "white")}
    {...props}
  />
);
