import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";

import { theme } from "./theme";

export const Chakra: React.FC<{ cookies: unknown }> = ({
  cookies,
  children
}) => {
  const colorModeManager = typeof cookies === "string"
    ? cookieStorageManager(cookies)
    : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? "",
    },
  };
}