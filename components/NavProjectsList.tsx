import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

type Route = {
  label: string;
  title: string;
  path: string;
  image: string;
  description: string;
  imageW: string;
};

const Links: Route[] = [
  {
    path: "/project/green-ghost",
    image: "/media/green-ghost-gokai-labs-creative-web-design-seo-agency.webp",
    label: "Green Ghost",
    title: "Green Ghost Web Design",
    description:
      "Vibrant website with bold user experience, expert SEO, and dynamic design for maximum engagement.",
    imageW: "20px",
  },
  {
    path: "/project/ghostverse",
    image: "/media/ghostverse-gokai-labs-creative-web-design-seo-agency.webp",
    label: "GhostVerse",
    title: "GhostVerse Web Design",
    description:
      "Web3-powered website with stunning user experience, top-tier SEO, and innovative digital solutions.",
    imageW: "8px",
  },
  {
    path: "/project/amann-inkspiration",
    image:
      "/media/amann-inkspiration-gokai-labs-creative-web-design-seo-agency.webp",
    label: "Amann Inkspiration",
    title: "Amann Inkspiration Web Design",
    description:
      "Website with seamless user experience, expert SEO, and creative design crafted for lasting impact.",
    imageW: "18px",
  },
];

export const NavProjectsList = () => {
  return (
    <Box
      as="nav"
      aria-label="Projects Navigation"
      mb={4}
      mx={{ base: "0", md: "0" }}
      overflow={{ base: "auto", md: "none" }}
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        as="ul"
        aria-label="Projects Navigation List"
        display="flex"
        flexWrap={"wrap"}
        listStyleType="none"
        mx={-1}
        p={0}
        fontSize={{ base: "sm", md: "xl" }}
        fontFamily={"DMSansBlack"}
      >
        {Links.map((link) => (
          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "33.33333%",
              lg: "25%",
              xl: "20%",
            }}
            as="li"
            aria-label={`${link.label} Web Design`}
            key={link.label}
            mb={2}
            borderRadius={10}
          >
            <Link href={link.path} title={link.title} passHref>
              <Box
                as="span"
                display={"flex"}
                flexDirection={"column"}
                p={{ base: 2 }}
                mx={1}
                h={{ base: "100%", md: "100%" }}
                backgroundColor={"ghostVerse.dark.lighter"}
                _hover={{
                  backgroundColor: "all.transparent",
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={{ base: "row", md: "column" }}
                >
                  <Box w={{ base: "50%", md: "100%" }} mr={{ base: 2, md: 0 }}>
                    <Box
                      as="h2"
                      whiteSpace={"wrap"}
                      color={"all.secondary"}
                      display={"flex"}
                      alignItems={"end"}
                      lineHeight={1}
                      my={1}
                    >
                      {link.label}
                    </Box>
                    <Image
                      src={`${link.image}`}
                      alt={`${link.title}`}
                      width={1366}
                      height={1366}
                      sizes="100%"
                      quality={75}
                    />
                  </Box>
                  <Text
                    as="p"
                    fontSize={{ base: 18, lg: 22 }}
                    lineHeight={{ base: "20px" }}
                    fontFamily="DMSansRegular"
                    w={{ base: "50%", md: "100%" }}
                    whiteSpace={"normal"}
                    my={1}
                  >
                    {link.description}
                  </Text>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
