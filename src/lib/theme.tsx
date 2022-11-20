import {
  extendTheme,
  theme as base,
  ThemeConfig,
  withDefaultVariant
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
};

export const theme = extendTheme(
  {
    config,
    colors: {
      brand: base.colors.blue
    },
    components: {
      Link: {
        variants: {
          "branded": (props) => ({
            color: props.colorMode === "dark" ? "brand.300" : "brand.700"
          }),
          "bw": (props) => ({
            color: props.colorMode === "dark" ? "black" : "white"
          })
        }
      }
    }
  },
  withDefaultVariant({
    variant: "branded",
    components: ["Link"]
  })
);