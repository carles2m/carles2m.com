import {
  ThemeConfig,
  theme as base,
  extendTheme,
  withDefaultVariant
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
    colors: {
      brand: base.colors.red
    },
    components: {
      Link: {
        variants: {
          "branded": (props) => ({
            color: props.colorMode === "dark" ? "brand.300" : "brand.700"
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

export default theme;
