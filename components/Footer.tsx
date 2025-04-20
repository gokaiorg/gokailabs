import { Box, Text } from "@chakra-ui/react";
import { NavSocialMedia } from "./NavSocialMedia";
import { NavFooter } from "./NavFooter";

export const Footer = () => {
  return (
    <Box
      as="footer"
      aria-label="Site Footer"
      color={"ghostVerse.grey.lighter"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={{ base: "5" }}
    >
      <NavFooter />
      <NavSocialMedia />
      <Box
        fontSize={{ base: 16, lg: 16 }}
        fontWeight={"bold"}
        position={"relative"}
        zIndex={1}
        my={2}
        display={"flex"}
        justifyContent={"center"}
        whiteSpace={"nowrap"}
        fontFamily={"DMSansRegular"}
      >
        <Text>Made with creativity by</Text>
        <Text as="a" color="all.secondary" href="https://www.gokai.org" mx={2}>
          Gokai Labs
        </Text>
      </Box>
    </Box>
  );
};
