import type { GetServerSideProps, NextPage } from "next";
import { MainLayout } from "../components/MainLayout";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { HomeSectionTitle } from "../components/HomeSectionTitle";
import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { HighlightPrimary } from "../components/HighlightPrimary";
import { TeamBlock } from "../components/TeamBlock";
import { motion, useScroll, useTransform } from "framer-motion";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const About: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <>
      <Head>
        <title>Creative Web Design & SEO in Paris & Phuket | Gokai Labs</title>
        <meta
          name="description"
          content="Learn about Gokai Labs, your Paris & Phuket agency for stunning web design, UX, and expert SEO. Discover our passion for AI-driven digital success!
"
        />
        <meta
          property="og:title"
          content="Creative Web Design & SEO in Paris & Phuket | Gokai Labs"
        />
        <meta
          property="og:description"
          content="Learn about Gokai Labs, your Paris & Phuket agency for stunning web design, UX, and expert SEO. Discover our passion for AI-driven digital success!
"
        />
        <meta
          property="og:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://gokai.org/about" />
        <meta
          name="twitter:title"
          content="Creative Web Design & SEO in Paris & Phuket | Gokai Labs"
        />
        <meta
          name="twitter:description"
          content="Learn about Gokai Labs, your Paris & Phuket agency for stunning web design, UX, and expert SEO. Discover our passion for AI-driven digital success!
"
        />
        <meta
          name="twitter:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta name="twitter:url" content="https://gokai.org/about" />
      </Head>
      <MainLayout>
        <Header>
          <NavHeader enabled={["auth"]} />
        </Header>
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
              alt="Contact Our Weed Shop Team To Order"
              title="Contact Our Weed Shop Team To Order"
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
            <HomeSectionTitle title="About" />
            <Text
              as="p"
              fontSize={{ base: 20, lg: 28 }}
              lineHeight={{ base: "25px", md: "30px" }}
              fontFamily="DMSansRegular"
              mt={5}
              textAlign={"center"}
            >
              At Gokai Labs, we redefine digital excellence from Paris and
              Phuket. Our team crafts stunning websites, seamless UX, and
              top-tier SEO, driven by AI personalization, short-form video, and
              voice search trends. With a passion for creativity and data-driven
              results, we empower brands to thrive online. Led by Jeremy
              Douchamps, we blend innovation and strategy to deliver projects
              that captivate and convert. Join us to transform your vision into
              a digital masterpiece!
            </Text>
          </Box>
        </Box>
        <TeamBlock />
        <Text
          as="h2"
          textAlign="center"
          fontSize={{ base: 20 }}
          lineHeight={1}
          fontFamily="DMSansBlack"
          mb={4}
        >
          Powering Innovation with Cutting-Edge Tools
        </Text>
        <Text
          textAlign={"center"}
          as="p"
          fontSize={{ base: 18, lg: 22 }}
          lineHeight={1}
          fontFamily="DMSansRegular"
        >
          Gokai Labs leverages top-tier technologies to craft exceptional
          digital experiences. From Figma and Photoshop for stunning designs to
          Drupal, Shopify, and Next.js for robust websites, we master CMS, HTML,
          JS, and CSS. Our expertise in Web3, crypto, and NFTs ensures
          future-ready solutions. Based in Paris and Phuket, we blend tools like
          these with AI-driven UX and SEO to deliver projects that captivate and
          perform. Trust us to build your brand with the latest tech!
        </Text>
        <HighlightPrimary />
        <Text
          textAlign={"center"}
          as="p"
          fontSize={{ base: 30, lg: 40 }}
          lineHeight={1}
          fontFamily="DMSansRegular"
        >
          Let’s shape the future of your brand together—connect with Gokai Labs
          to turn your vision into a digital reality that stands out and
          succeeds!
        </Text>
        <Box position={"relative"} w="100%" h={{ base: "200px", lg: "600px" }}>
          <Image
            src="/media/logo-gokai-labs-creative-web-design-seo-agency.webp"
            fill
            style={{ objectFit: "contain" }}
            alt={"Green Ghost Weed Shop Phuket"}
            priority={false}
            quality={75}
          />
        </Box>
      </MainLayout>
    </>
  );
};

export default About;
