import {
  extendTheme,
  theme as base,
  ThemeConfig,
  withDefaultVariant
} from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: true,
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
            color: props.colorMode === "dark" ? "brand.400" : "brand.600"
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
