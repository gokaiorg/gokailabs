import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LinkPrimary } from "./LinkPrimary";

export const NavProject = () => {
  const menuItems = [
    {
      href: "/project/green-ghost",
      title: "Green Ghost Web Design",
      label: "Green Ghost",
    },
    {
      href: "/project/ghostverse",
      title: "GhostVerse Web Design",
      label: "GhostVerse",
    },
    {
      href: "/project/amann-inkspiration",
      title: "Amann Inkspiration Web Design",
      label: "Amann Inkspiration",
    },
  ];

  return (
    <Box
      as="section"
      aria-labelledby="Projects Navigation"
      display="flex"
      mt={10}
      mb={10}
      flexWrap="wrap"
      alignItems="stretch"
    >
      <Box display="flex" flexDirection="column" w="100%" alignItems="center">
        <Text
          as="h2"
          fontSize={{ base: 24, lg: 30 }}
          lineHeight={1}
          fontFamily="DMSansBlack"
          mt={2}
          mb={6}
          textAlign="center"
        >
          Our Portfolio: Showcasing Creative Excellence
        </Text>
      </Box>
      <Box
        display="flex"
        w="100%"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Text
          as="p"
          fontSize={{ base: 18, lg: 22 }}
          lineHeight={1}
          fontFamily="DMSansRegular"
          w={{ base: "100%", md: "70%" }}
          mr={4}
        >
          Explore Gokai Labs’ dynamic portfolio, where innovation meets impact.
          From AI-driven web designs and seamless UX to short-form video
          integration and cutting-edge SEO, we craft digital experiences that
          captivate and convert. Powered by trends like hyper-personalization
          and voice search optimization, our Paris and Phuket teams transform
          brands with data-driven creativity. Discover projects that redefine
          digital success and elevate online presence.
        </Text>
        <Box
          as="nav"
          aria-label="Menu Navigation"
          display="flex"
          flexDirection="column"
          fontSize={{ base: 16, md: 20 }}
          fontFamily="DMSansBlack"
          color="all.primary"
          justifyContent="center"
          flex={1}
          mt={{ base: 4, lg: 0 }}
        >
          <Box
            as="ul"
            aria-label="Menu Navigation List"
            style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}
          >
            {menuItems.map((item, index) => (
              <Box as="li" key={index} aria-label={`${item.label} Menu`}>
                <Link href={item.href} passHref title={item.title}>
                  <Text
                    as="h3"
                    mb={2}
                    _hover={{
                      textDecoration: "underline",
                      color: "all.secondary",
                    }}
                    whiteSpace={"nowrap"}
                  >
                    {item.label}
                  </Text>
                </Link>
              </Box>
            ))}
          </Box>
          <Box ml="auto" mt={4} aria-label="Discover Our Projects">
            <Link
              href="/project"
              passHref
              title="Explore Gokai Labs’ portfolio"
            >
              <LinkPrimary title="Discover Our Projects" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
