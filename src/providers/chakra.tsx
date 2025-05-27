import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6edf1" },
          100: { value: "#c1d3de" },
          200: { value: "#9bb9ca" },
          300: { value: "#75a0b7" },
          400: { value: "#4f86a3" },
          500: { value: "#013e5e" },
          600: { value: "#013550" },
          700: { value: "#012b42" },
          800: { value: "#012234" },
          900: { value: "#011826" },
        },
        brandSecondary: {
          50: { value: "#fff3e6" },
          100: { value: "#ffe0bf" },
          200: { value: "#ffcc99" },
          300: { value: "#ffb873" },
          400: { value: "#ffa34d" },
          500: { value: "#ff8000" },
          600: { value: "#cc6600" },
          700: { value: "#994d00" },
          800: { value: "#663300" },
          900: { value: "#331a00" },
        },
      },
    },
  },
});

const theme = createSystem(defaultConfig, customConfig);

export function ChakraUIProvider({ children }: PropsWithChildren) {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;
}
