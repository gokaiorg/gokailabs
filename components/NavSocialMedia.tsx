import { SocialIcon } from "react-social-icons";
import { Box, Text } from "@chakra-ui/react";

export const NavSocialMedia = () => {
  return (
    <>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"} mt={4}>
        <Text
          as={"h3"}
          fontSize={"md"}
          color={"white"}
          fontFamily={"DMSansBlack"}
          mt={4}
        >
          Follow Us on Social Media
        </Text>
        <Box
          as={"h4"}
          display={"flex"}
          justifyContent={"center"}
          fontSize={"xl"}
          mt={0}
          mb={2}
          w={"full"}
          color={"ghostVerse.grey.lighter"}
          fontFamily={"DMSansRegular"}
        >
          @GokaiLabs
        </Box>
      </Box>
      <Box
        as="ul"
        listStyleType={"none"}
        aria-label="Social Media Icons List"
        display={"inline-flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={3}
        mx={"auto"}
      >
        <Box as={"li"} aria-label="Follow Us on X" borderRadius={"100%"}>
          <SocialIcon
            url="https://x.com/gokailabs"
            bgColor={"black"}
            style={{ width: 40, height: 40 }}
            title="Follow Us on X"
            network="x"
          />
        </Box>
        <Box as={"li"} aria-label="Follow Us on Github" borderRadius={"100%"}>
          <SocialIcon
            url="https://github.com/gokaiorg"
            bgColor={"black"}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Github"
          />
        </Box>
        <Box as={"li"} aria-label="Follow Us on Medium" borderRadius={"100%"}>
          <SocialIcon
            url="https://medium.com/@GokaiLabs"
            bgColor={"black"}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Medium"
          />
        </Box>
        <Box
          as={"li"}
          aria-label="Gokai Labs on LinkedIn"
          borderRadius={"100%"}
        >
          <SocialIcon
            url="https://linkedin.com/company/gokai-labs"
            bgColor={"black"}
            style={{ width: 40, height: 40 }}
            title="Gokai Labs on LinkedIn"
          />
        </Box>
        <Box as={"li"} aria-label="Join Us on Opensea" borderRadius={"100%"}>
          <SocialIcon
            url="https://opensea.io/Gokai"
            bgColor={"black"}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Opensea"
          />
        </Box>
      </Box>
    </>
  );
};
