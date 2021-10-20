
import { chakra } from "@chakra-ui/react";
import NextImage from "next/image";

export const ChakraNextImage = chakra(NextImage, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt", "quality", "placeholder", "blurDataURL", "loader", "layout"].includes(prop),
});