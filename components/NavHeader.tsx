import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavHeaderProps {
  enabled: string[];
}

export const NavHeader: FC<NavHeaderProps> = () => {
  const router = useRouter();

  const isActive = (href: string): boolean => router.asPath === href;

  const menuItems = [
    {
      href: "/project",
      title: "Explore Gokai Labs’ portfolio",
      label: "Projects",
      ariaLabel: "View our projects",
    },
    {
      href: "/contact",
      title: "Reach Gokai Labs in Paris & Phuket",
      label: "Contact",
      ariaLabel: "Get in touch",
    },
  ];

  return (
    <Box
      as="nav"
      mr={{ base: "0", md: "0" }}
      ml={{ base: "auto" }}
      aria-label="Main Navigation"
    >
      <Box
        as="ul"
        aria-label="Main Navigation List"
        listStyleType={"none"}
        ml="auto"
        mr={{ base: "auto", md: 0 }}
        py={{ base: 4, lg: 0 }}
        display="flex"
        fontFamily="DMSansBlack"
      >
        {menuItems.map((item) => (
          <Box
            as="li"
            aria-label={`${item.ariaLabel}`}
            key={item.href}
            ml={4}
            display="flex"
            alignItems="center"
            mx={{ base: "1", md: "2" }}
            color={isActive(item.href) ? "all.secondary" : "inherit"}
            _hover={{ color: "all.secondary" }}
          >
            <Link
              href={item.href}
              title={item.title}
              passHref
              aria-label={`${item.label}`}
            >
              {item.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
