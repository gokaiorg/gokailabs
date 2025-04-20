import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { ImgLogo } from "./media/ImgLogo";

export const Logo = () => {
  return (
    <Box
      mx={{ base: "0", md: "0" }}
      position="relative"
      width="120px"
      height="80px"
      maxW="inherit"
    >
      <Link
        title={"Green Ghost: Creative Web Design & SEO Agency"}
        href="/"
        passHref
      >
        <ImgLogo />
      </Link>
    </Box>
  );
};
