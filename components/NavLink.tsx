import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode;
  to: string;
  activeProps?: LinkProps;
  _hover?: LinkProps;
}

function NavLink({ to, activeProps, children, ...props }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === to;

  if (isActive) {
    return (
      <Link href={to}>
        <ChakraLink
          as={"span"}
          bgColor={"all.transparent"}
          py={4}
          px={6}
          height={"50px"}
          textAlign={"center"}
          alignItems={"center"}
          fontWeight={"bold"}
          fontSize={"lg"}
          display={"inline-flex"}
          color={"all.secondary"}
          borderColor={"all.secondary"}
          borderBottomWidth={2}
          borderTopWidth={0}
          borderLeftWidth={0}
          borderRightWidth={0}
          whiteSpace={"nowrap"}
          textDecoration={"none !important"}
          {...props}
          {...activeProps}
        >
          {children}
        </ChakraLink>
      </Link>
    );
  }

  return (
    <Link href={to}>
      <ChakraLink
        as={"span"}
        {...props}
        bgColor={"ghostVerse.dark.lighter"}
        py={4}
        px={6}
        height={"50px"}
        textAlign={"center"}
        alignItems={"center"}
        fontWeight={"bold"}
        fontSize={"lg"}
        display={"inline-flex"}
        color={"all.secondary"}
        borderColor={"black"}
        borderBottomWidth={2}
        borderTopWidth={0}
        borderLeftWidth={0}
        borderRightWidth={0}
        whiteSpace={"nowrap"}
        textDecoration={"none !important"}
        {...props}
        {...activeProps}
        _hover={{ borderColor: "all.secondary" }}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}

export default NavLink;
