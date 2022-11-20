import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import { theme } from "./theme";

export const Chakra: React.FC<{ cookies?: string }> = ({
  cookies,
  children
}) => {
  const colorModeManager = typeof cookies === "string"
    ? cookieStorageManagerSSR(cookies)
    : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

// from https://chakra-ui.com/docs/styled-system/color-mode#add-colormodemanager-optional-for-ssr
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? "",
    },
  };
};