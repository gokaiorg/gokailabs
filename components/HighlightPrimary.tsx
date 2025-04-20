import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { LinkPrimary } from "./LinkPrimary";
import { LinkSecondary } from "./LinkSecondary";

export const HighlightPrimary = () => {
  return (
    <Box
      display="flex"
      my={{ base: 5, lg: 10 }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        as="section"
        aria-labelledby="New cannabis gadget in store"
        w={{ base: "100%", md: "60%", lg: "65%" }}
        borderRadius={10}
        display="flex"
        bgColor="ghostVerse.dark.lighter"
        p={5}
        mr={{ base: 0, lg: 4 }}
        mb={{ base: 2, lg: 0 }}
      >
        <Box w={{ base: "50%", lg: "30%" }} mr={4} mb={{ base: 4, md: 0 }}>
          <Link
            href="/gadgets/weed-th-rolling-papers-tips"
            passHref
            title="WEED.TH Rolling Papers + Tips"
          >
            <Image
              src="/media/logo-green-ghost-degen-weed-shop.png"
              width={828}
              height={828}
              style={{ objectFit: "contain" }}
              priority
              alt="WEED.TH Rolling Papers + Tips"
              title="WEED.TH Rolling Papers + Tips"
              sizes="200px"
              quality={75}
            />
          </Link>
        </Box>
        <Box display="flex" flexDirection="column" w="100%" alignItems="start">
          <Text
            as="h2"
            fontSize={{ base: 18, lg: 24 }}
            lineHeight={1}
            fontFamily="DMSansBlack"
            mb={2}
            textAlign="left"
          >
            Green Ghost Degen Weed Shop
          </Text>
          <Text
            as="p"
            lineHeight={1}
            fontFamily="DMSansRegular"
            fontSize={{ base: 18, lg: 22 }}
            mb="auto"
          >
            Explore our work with Green Ghost Weed Shop, where we crafted a
            vibrant website and boosted their online presence with expert SEO
            and UX.
          </Text>
          <Link
            href="https://green.gd/"
            passHref
            title="Green Ghost Degen Weed Shop"
          >
            <LinkPrimary title="Visit Green Ghost" />
          </Link>
        </Box>
      </Box>
      <Box
        as="section"
        aria-labelledby="Cannabis Club"
        display="flex"
        flexDirection="column"
        w={{ base: "100%", md: "40%", lg: "35%" }}
        borderRadius={10}
        backgroundColor="all.primary"
        color="black"
        p={5}
      >
        <Text
          as="h3"
          fontSize={{ base: 24, lg: 34 }}
          lineHeight={1}
          fontFamily="DMSansBlack"
          mb={2}
          textAlign="left"
        >
          GhostVerse
        </Text>
        <Text
          as="p"
          fontFamily="DMSansRegular"
          fontSize={{ base: 18, lg: 22 }}
          lineHeight={1}
          mb="auto"
        >
          GhostVerse: Bold Design, Seamless UX, Top-Ranked SEO
        </Text>
        <Box
          mt={5}
          display={"flex"}
          flexWrap={"wrap"}
          alignItems={{ base: "left", lg: "center" }}
          justifyContent={{ base: "left", lg: "center" }}
        >
          <Link
            href="https://ghostverse.org/"
            passHref
            title="Best Cannabis Social Club in Phuket Thailand"
            aria-label="Join the club"
          >
            <LinkSecondary title="Check the GhostVerse" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
