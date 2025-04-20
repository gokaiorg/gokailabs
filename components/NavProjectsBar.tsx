import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

type Route = {
  label: string;
  title: string;
  path: string;
  image: string;
  imageW: string;
};

const Links: Route[] = [
  {
    path: "/project/green-ghost",
    image: "/media/green-ghost-degen-weed-shop-menu-buds.png",
    label: "Green Ghost",
    title: "Weed Shop Premium Cannabis Buds Menu",
    imageW: "20px",
  },
  {
    path: "/project/ghostverse",
    image: "/media/green-ghost-degen-weed-shop-menu-pre-rolls.png",
    label: "GhostVerse",
    title: "Weed Shop Premium Cannabis Pre Rolls Menu",
    imageW: "8px",
  },
  {
    path: "/project/amann-inkspiration",
    image: "/media/green-ghost-degen-weed-shop-menu-edibles.png",
    label: "Amann Inkspiration",
    title: "Weed Shop Premium Cannabis Edibles Menu",
    imageW: "18px",
  },
  {
    path: "/project/art-fate",
    image: "/media/green-ghost-degen-weed-shop-menu-degen.png",
    label: "Art Fate",
    title: "Weed Shop Premium Cannabis Concentrates Menu",
    imageW: "7px",
  },
];

export const NavProjectsBar = () => {
  const { pathname } = useRouter();

  return (
    <Box
      as="nav"
      aria-label="Menu Navigation"
      mb={4}
      overflow={{ base: "auto", md: "none" }}
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        as="ul"
        aria-label="Menu Navigation List"
        display="flex"
        listStyleType="none"
        m={0}
        p={0}
        fontSize={"sm"}
        fontFamily={"DMSansBlack"}
        color={"all.secondary"}
      >
        {Links.map((link) => (
          <Box
            as="li"
            aria-label={`${link.label} Menu`}
            key={link.label}
            px={4}
            py={4}
            whiteSpace={"nowrap"}
            backgroundColor={
              pathname === link.path ? "all.transparent" : "transparent"
            }
            borderBottomWidth={1}
            borderColor={
              pathname === link.path ? "all.secondary" : "transparent"
            }
          >
            <Link href={link.path} title={link.title} passHref>
              {link.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
