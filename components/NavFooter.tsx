import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavFooter = () => {
  const router = useRouter();

  const isActive = (href: string): boolean => router.asPath === href;

  const menuItems = [
    {
      href: "/project",
      title: "Explore Gokai Labs’ portfolio",
      label: "View our projects",
      ariaLabel: "View our projects",
    },
    {
      href: "/about",
      title: "About Web Design Culture",
      label: "About Design",
      ariaLabel: "About Design",
    },
    {
      href: "/locations",
      title: "Best Creative Agency near me",
      label: "Find our agencies",
      ariaLabel: "Find our agencies",
    },
    {
      href: "/payment",
      title: "Make a payment for your branding update",
      label: "Make a payment",
      ariaLabel: "Make a payment",
    },
    {
      href: "/sitemap",
      title: "List of all website pages and sections",
      label: "Website sitemap",
      ariaLabel: "Website sitemap",
    },
    {
      href: "/contact",
      title: "Reach Gokai Labs in Paris & Phuket",
      label: "Get in touch",
      ariaLabel: "Get in touch",
    },
  ];

  return (
    <>
      <Box
        as="nav"
        mt={10}
        mx={"auto"}
        maxW={{ base: "480px", md: "675px", lg: "675px", xl: "675px" }}
        aria-label="Footer Navigation"
        textAlign={"left"}
      >
        <Box
          as="ul"
          aria-label="Footer Navigation List"
          listStyleType={"none"}
          display="flex"
          justifyContent={"center"}
          flexWrap={"wrap"}
          fontFamily={"DMSansRegular"}
          fontSize={"2xl"}
          lineHeight={1}
        >
          {menuItems.map((item) => (
            <Box
              as="li"
              aria-label={`${item.ariaLabel}`}
              key={item.href}
              ml={4}
              display="flex"
              fontSize={{ base: "xl", md: "xl" }}
              borderRadius={"full"}
              m={{ base: "1" }}
              p={2}
              w={{ base: "104px" }}
              h={{ base: "104px" }}
              color={
                isActive(item.href)
                  ? "all.secondary"
                  : "ghostVerse.dark.lighter"
              }
              backgroundColor={
                isActive(item.href)
                  ? "ghostVerse.dark.lighter"
                  : "all.secondary"
              }
              _hover={{
                backgroundColor: "all.transparent",
                color: "all.secondary",
              }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Link href={item.href} title={item.title} passHref>
                {item.ariaLabel}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
