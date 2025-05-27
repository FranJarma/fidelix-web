import { Flex, Image, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Header = () => {
  const [logo, setLogo] = useState("/logo-kybo.webp");

  useEffect(() => {
    const cachedTheme = localStorage.getItem("currentTheme");
    if (cachedTheme) {
      const theme = JSON.parse(cachedTheme);
      if (theme.logoUrl) setLogo(theme.logoUrl);
    }
  }, []);

  return (
    <Flex
      align="center"
      as="header"
      bg="brand.500"
      height="64px"
      justify="flex-end"
      px={6}
      py={4}
      shadow="md"
    >
      <Flex align="center" gap={4}>
        <Link href="/">
          <Image alt="Logo" height="40px" src={logo} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
