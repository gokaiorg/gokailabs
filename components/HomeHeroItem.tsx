import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LinkPrimary } from "./LinkPrimary";

interface HomeHeroItemProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  link: string;
  linkTitle: string;
  linkLabel: string;
}

export const HomeHeroItem: FC<HomeHeroItemProps> = ({
  title,
  image,
  imageAlt,
  description,
  linkTitle,
  linkLabel,
  link,
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <Box
      as="section"
      aria-label="Banner"
      position="relative"
      height="100%"
      width="100%"
      overflow="hidden"
      mb={10}
    >
      <motion.div
        style={{
          y,
          position: "absolute",
          top: "-65%",
          left: 0,
          width: "100%",
          height: "200%",
          zIndex: -1,
        }}
      >
        <Image
          src={image}
          alt={imageAlt}
          title={imageAlt}
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
        />
      </motion.div>
      <Box
        bg="rgba(0, 0, 0, 0.8)"
        px={2}
        py={10}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign="center"
        h={"100%"}
        minHeight={{ base: "auto", md: "400px" }}
      >
        <Text
          as="h1"
          my={10}
          fontFamily="DMSansBlack"
          fontSize={{ base: 22, lg: 44 }}
          lineHeight={1}
          color="all.primary"
          mx="auto"
          w={{ base: "100%", md: "65%", lg: "45%", xl: "40%" }}
        >
          {title}
        </Text>
        <Text
          as="p"
          lineHeight={1}
          fontFamily={"DMSansRegular"}
          fontSize={{ base: 20, lg: 28 }}
          mb={5}
          mx="auto"
          w={{ base: "100%", xl: "100%" }}
        >
          {description}
        </Text>
        <Box
          aria-label="Contact us now"
          display={"flex"}
          flexWrap={"wrap"}
          gap={2}
          mx={"auto"}
        >
          <Link href={link} title={linkTitle} passHref>
            <LinkPrimary title={linkLabel} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
