import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

type ChakraUIProviderProps = {
  children: React.ReactNode;
};

export function ChakraUIProvider({ children }: ChakraUIProviderProps) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
