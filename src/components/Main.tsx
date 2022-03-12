import { Stack, StackProps } from "@chakra-ui/react";

export const Main: React.FC<StackProps> = (props) => (
  <Stack
    spacing="2rem"
    w="full"
    maxW="6xl"
    px="1rem"
    pt="1vh"
    {...props}
  />
);
