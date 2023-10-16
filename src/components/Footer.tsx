import {
  Box,
  Divider,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { getYear } from "../lib/dateUtil";

interface FooterProps {
  profileName: string,
}

export const Footer: React.FC<FooterProps> = ({
  profileName,
}) => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(getYear());

    const interval = setInterval(() => {
      setYear(getYear());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      as="footer"
      w="full"
      mt="auto"
      pt={6}
    >
      <Divider />
      <HStack
        maxW="6xl"
        ml="auto"
        mr="auto"
        p={4}
      >
        <Text>{`© ${year ?? ""} ${profileName}`}</Text>
      </HStack>
    </Box>
  );
};