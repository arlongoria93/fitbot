import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#BB86FC",
      primaryVariant: "#3700b3",
      secondary: "#03dac6",
      background: "#121212",
      error: "#cf6679",
      onPrimary: "#000000",
      onBackground: "#FFFFFF",
      block: "#212121",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#121212",
        color: "#FFFFFF",
      },
    },
  },
});
