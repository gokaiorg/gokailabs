import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LinkSecondary } from "./LinkSecondary";

export const HighlightSecondary = () => {
  return (
    <Box
      as="section"
      aria-labelledby="Connect with Gokai Labs to transform your brand"
      display={"flex"}
      mb={5}
      p={5}
      pt={0}
      h={"full"}
      borderRadius={10}
      flexWrap={"wrap"}
      alignItems={"stretch"}
      backgroundColor={"all.secondary"}
      color={"black"}
    >
      <Box display={"flex"} w={"100%"} alignItems={"left"}>
        <Text
          as={"h3"}
          fontSize={{ base: 30, lg: 40 }}
          lineHeight={1}
          fontWeight={"bold"}
          fontFamily={"DMSansRegular"}
          mt={{ base: 5 }}
          mb={{ base: 5 }}
          textAlign={"left"}
        >
          Ready to Elevate Your Brand?
        </Text>
      </Box>
      <Text
        as={"p"}
        fontSize={{ base: 18, lg: 22 }}
        lineHeight={1}
        fontFamily={"DMSansRegular"}
        w={{ base: "100%", md: "70%" }}
        mr={4}
        textAlign={"left"}
      >
        Connect with Gokai Labs to transform your digital presence. Our Paris
        and Phuket teams craft stunning websites, seamless UX, and powerful SEO
        tailored to your vision. Let’s harness AI-driven personalization and
        cutting-edge trends to drive your success. Reach out today!
      </Text>
      <Link
        href={"/contact"}
        passHref
        title="Connect with Gokai Labs to transform your brand"
      >
        <LinkSecondary title="Get in Touch" />
      </Link>
    </Box>
  );
};
