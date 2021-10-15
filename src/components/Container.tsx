import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bg={useColorModeValue("gray.50", "gray.900")}
    color={useColorModeValue("black", "white")}
    {...props}
  />
);
