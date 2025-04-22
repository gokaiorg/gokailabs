import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LinkSecondary } from "./LinkSecondary";
import Image from "next/image";

export const TeamBlock = () => {
  return (
    <Box
      as="section"
      aria-labelledby="Meet the Vision Behind Gokai Labs"
      display={"flex"}
      my={10}
      p={5}
      h={"full"}
      borderRadius={10}
      alignItems={"stretch"}
      backgroundColor={"all.secondary"}
      color={"black"}
    >
      <Box w={{ base: "100%", md: "30%", lg: "20%" }} marginRight={4}>
        <Image
          src="/media/jeremy-gokai-labs-creative-web-design-seo-agency.webp"
          alt="Weed Shop Premium Cannabis Edibles Menu"
          title="Weed Shop Premium Cannabis Edibles Menu"
          width={2048}
          height={1366}
          sizes="100%"
          quality={75}
        />
      </Box>
      <Box w={"100%"} alignItems={"left"}>
        <Text
          as={"h3"}
          fontSize={{ base: 30, lg: 40 }}
          lineHeight={1}
          fontWeight={"bold"}
          fontFamily={"DMSansRegular"}
          mb={{ base: 5 }}
          textAlign={"left"}
        >
          Meet the Vision Behind Gokai Labs
        </Text>
        <Text
          as={"p"}
          fontSize={{ base: 18, lg: 22 }}
          lineHeight={1}
          fontFamily={"DMSansRegular"}
          w={{ base: "100%", md: "70%" }}
          mr={4}
          textAlign={"left"}
        >
          I’m Jeremy, manager of Gokai Labs. From Paris to Phuket, I lead our
          team in crafting stunning websites, seamless UX, and powerful SEO.
          With a passion for AI-driven innovation and trends like short-form
          video, I ensure every project elevates your brand. Connect with me to
          bring your vision to life!
        </Text>
      </Box>
      <Link
        href={"https://www.linkedin.com/in/jeremy-douchamps"}
        passHref
        title="Meet the Vision Behind Gokai Labs"
      >
        <LinkSecondary title="Get in Touch" />
      </Link>
    </Box>
  );
};
