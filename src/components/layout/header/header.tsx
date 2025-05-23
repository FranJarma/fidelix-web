import { Flex, Image, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Tooltip } from "../../ui/tooltip";

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
      bg="#013e5e"
      height="64px"
      justify="space-between"
      px={6}
      py={4}
      shadow="md"
    >
      <Flex align="center" gap={4}>
        <Link href="/">
          <Image alt="Logo" height="64px" src={logo} />
        </Link>
      </Flex>

      <Flex color="white" gap={4}>
        <Tooltip content="Ajustes de usuario">
          <FiUser></FiUser>
        </Tooltip>
        <Tooltip content="Cerrar sesión">
          <FiLogOut />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Header;
