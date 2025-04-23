import { GetServerSideProps, NextPage } from "next";
import { MainLayout } from "../../components/MainLayout";
import { Header } from "../../components/Header";
import { NavHeader } from "../../components/NavHeader";
import Head from "next/head";
import { NavProjectsList } from "../../components/NavProjectsList";
import { Box, Text } from "@chakra-ui/react";
import { HomeSectionTitle } from "../../components/HomeSectionTitle";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const MenuFull: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <>
      <Head>
        <title>Web Design, UX & SEO in Paris & Phuket | Gokai Labs</title>
        <meta
          name="description"
          content="Explore Gokai Labs’ portfolio of stunning web design, seamless UX, and expert SEO projects from Paris & Phuket. Discover AI-driven, Web3-ready solutions!"
        />
        <meta
          property="og:title"
          content="Web Design, UX & SEO in Paris & Phuket | Gokai Labs"
        />
        <meta
          property="og:description"
          content="Explore Gokai Labs’ portfolio of stunning web design, seamless UX, and expert SEO projects from Paris & Phuket. Discover AI-driven, Web3-ready solutions!"
        />
        <meta
          property="og:image"
          content="https://gokai.org/media/green-ghost-best-degen-weed-shop-menu.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://gokai.org/project" />
        <meta
          name="twitter:title"
          content="Web Design, UX & SEO in Paris & Phuket | Gokai Labs"
        />
        <meta
          name="twitter:description"
          content="Explore Gokai Labs’ portfolio of stunning web design, seamless UX, and expert SEO projects from Paris & Phuket. Discover AI-driven, Web3-ready solutions!"
        />
        <meta
          name="twitter:image"
          content="https://gokai.org/media/green-ghost-best-degen-weed-shop-menu.webp"
        />
        <meta name="twitter:url" content="https://gokai.org/project" />
      </Head>
      <MainLayout>
        <Header>
          <NavHeader enabled={["auth"]} />
        </Header>
        <Box as="main">
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
                src="/gokai-labs-creative-web-design-seo-agency.webp"
                alt="Web Design, UX & SEO in Paris & Phuket"
                title="Web Design, UX & SEO in Paris & Phuket"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
              />
            </motion.div>
            <Box
              bg="rgba(0, 0, 0, 0.8)"
              p={2}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              h={"100%"}
              minHeight={{ base: "auto", md: "400px" }}
            >
              <HomeSectionTitle title="Projects" />
              <Text
                as="p"
                fontSize={{ base: 20, lg: 28 }}
                lineHeight={{ base: "25px", md: "30px" }}
                fontFamily="DMSansRegular"
                mt={5}
                textAlign={"center"}
              >
                We create stunning websites, seamless UX, and top-ranking SEO,
                powered by AI personalization, short-form video, and voice
                search trends. Each project blends creativity and data-driven
                strategies to elevate brands globally.
              </Text>
            </Box>
          </Box>
          <NavProjectsList />
        </Box>
      </MainLayout>
    </>
  );
};

export default MenuFull;
