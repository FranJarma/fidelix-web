import { Box, Flex, Image } from "@chakra-ui/react";

import { LoginForm } from "../components/login-form";

export function LoginPage() {
  return (
    <Flex align="center" bg="gray.50" justify="center" minH="100vh">
      <Flex borderRadius="lg" boxShadow="lg" maxW="1200px" overflow="hidden" w="full">
        <Box bg="white" flex="1" p={{ base: 6, md: 10 }}>
          <LoginForm />
        </Box>

        <Box
          alignItems="center"
          bg="black"
          display={{ base: "none", md: "flex" }}
          flex="1"
          justifyContent="center"
        >
          <Image alt="Fidelix Logo" src="logo-fidelix-black.webp" />
        </Box>
      </Flex>
    </Flex>
  );
}
