import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { MainLayout } from "../../../components/MainLayout";
import { Header } from "../../../components/Header";
import { NavHeader } from "../../../components/NavHeader";
import Head from "next/head";
import { NavProjectsBar } from "../../../components/NavProjectsBar";
import { HighlightSecondary } from "../../../components/HighlightSecondary";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const WeedShopEdibles: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Amann Inkspiration",
    description: "Weed Shop Premium Cannabis Edibles Menu",
  };

  return (
    <>
      <Head>
        <title>Weed Shop Premium Cannabis Edibles Menu | Gokai Labs</title>
        <meta
          name="description"
          content="Explore Green Ghost's Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies."
        />
        <meta
          property="og:title"
          content="Weed Shop Premium Cannabis Edibles Menu | Gokai Labs"
        />
        <meta
          property="og:description"
          content="Explore Green Ghost's Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies."
        />
        <meta
          property="og:image"
          content="https://gokai.org/media/amann-inkpiration-gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://gokai.org/project/edibles" />
        <meta
          name="twitter:title"
          content="Weed Shop Premium Cannabis Edibles Menu | Gokai Labs"
        />
        <meta
          name="twitter:description"
          content="Explore Green Ghost's Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies."
        />
        <meta
          name="twitter:image"
          content="https://gokai.org/media/amann-inkpiration-gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta name="twitter:url" content="https://gokai.org/project/edibles" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </Head>
      <MainLayout>
        <Header>
          <NavHeader enabled={["auth"]} />
        </Header>
        <NavProjectsBar />
        <Box as="main">
          <Box
            as="div"
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={"stretch"}
          >
            <Box
              as="section"
              aria-label="Edibles menu image"
              cursor={"pointer"}
              height={"auto"}
              w={{ base: "100%", md: "50%" }}
              mb={{ base: "2", md: "0" }}
              overflow={"hidden"}
              position={"relative"}
              display={"flex"}
              justifyContent={"center"}
              backgroundColor="all.primary"
            >
              <Image
                src="/media/amann-inkpiration-gokai-labs-creative-web-design-seo-agency.webp"
                alt="Weed Shop Premium Cannabis Edibles Menu"
                title="Weed Shop Premium Cannabis Edibles Menu"
                width={2048}
                height={1366}
                sizes="100%"
                quality={75}
              />
              <Text
                onClick={handleClick}
                as="span"
                display="inline-flex"
                fontFamily="DMSansBlack"
                alignItems={"center"}
                justifyContent={"center"}
                pos={"absolute"}
                bottom={0}
                right={0}
                top={0}
                left={0}
                fontSize={{ base: "lg", md: "xl" }}
                px={6}
                py={2}
                color="all.primary"
                backgroundColor="ghostVerse.dark.base"
                transition="duration: 0.6"
                _hover={{
                  bg: "all.transparent",
                  color: "black",
                }}
              >
                View Image
              </Text>
            </Box>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  onClick={handleClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                  }}
                >
                  <Text
                    as="span"
                    display="inline-flex"
                    fontFamily="DMSansBlack"
                    fontSize={{ base: "lg", md: "xl" }}
                    px={6}
                    py={2}
                    color="all.primary"
                    pos={"absolute"}
                    right={1}
                    top={1}
                    alignItems={"center"}
                    justifyContent={"center"}
                    cursor={"pointer"}
                  >
                    X
                  </Text>
                  <motion.img
                    src="/media/amann-inkpiration-gokai-labs-creative-web-design-seo-agency.webp"
                    alt="Weed Shop Premium Cannabis Edibles Menu"
                    title="Weed Shop Premium Cannabis Edibles Menu"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      maxWidth: "90%",
                      maxHeight: "90%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      aspectRatio: "2048 / 1366",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Box
              as="div"
              w={{ base: "100%", md: "50%" }}
              ml={{ base: "0", md: "2" }}
            >
              <HighlightSecondary />
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default WeedShopEdibles;
