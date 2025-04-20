import type { GetServerSideProps, NextPage } from "next";
import { MainLayout } from "../components/MainLayout";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { HomeSectionTitle } from "../components/HomeSectionTitle";
import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { HighlightPrimary } from "../components/HighlightPrimary";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const BuyWeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Cannabis Culture in Thailand | Gokai Labs</title>
        <meta
          name="description"
          content="Discover Green Ghost, a leading cannabis social club in Phuket, championing local culture, top-quality weed, and a thriving community for enthusiasts."
        />
        <meta
          property="og:title"
          content="About Cannabis Culture in Thailand | Gokai Labs"
        />
        <meta
          property="og:description"
          content="Discover Green Ghost, a leading cannabis social club in Phuket, championing local culture, top-quality weed, and a thriving community for enthusiasts."
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
          content="About Cannabis Culture in Thailand | Gokai Labs"
        />
        <meta
          name="twitter:description"
          content="Discover Green Ghost, a leading cannabis social club in Phuket, championing local culture, top-quality weed, and a thriving community for enthusiasts."
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
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <HomeSectionTitle title="About" />
        </Box>
        <Text
          as="h2"
          textAlign="center"
          fontSize={{ base: 20 }}
          lineHeight={1}
          fontFamily="DMSansBlack"
          my={4}
        >
          {"Nurturing Thailand's Cannabis Culture"}
        </Text>
        <Text
          textAlign={"center"}
          as="p"
          fontSize={{ base: 30, lg: 40 }}
          lineHeight={1}
          fontFamily="DMSansRegular"
        >
          {
            "At Green Ghost, we’re dedicated to supporting the Thai cannabis community by offering the best "
          }
          <Link
            href="/weed"
            passHref
            color="all.primary"
            title="Your Weed Guide to Cannabis Excellence"
          >
            <Box as="span" color="all.primary">
              Weed
            </Box>
          </Link>
          {
            " across outdoor, greenhouse, and indoor varieties. Our mission is to help Thailand grow as a leading hub for premium cannabis."
          }
        </Text>
        <Text
          as="h2"
          textAlign="center"
          fontSize={{ base: 20 }}
          lineHeight={1}
          fontFamily="DMSansBlack"
          mb={4}
        >
          Green Ghost redefines the cannabis coffeeshop experience
        </Text>
        <Text
          textAlign={"center"}
          as="p"
          fontSize={{ base: 30, lg: 40 }}
          lineHeight={1}
          fontFamily="DMSansRegular"
        >
          By blending top-notch weed with cutting-edge technology and crypto
          rewards. Our unique concept integrates expertly crafted Thai-grown,
          organic products with exclusive discounts and innovative rewards for
          crypto enthusiasts. At Green Ghost, we’re dedicated to exceptional
          quality and a distinctive experience that highlights our commitment to
          excellence.
        </Text>
        <HighlightPrimary />
        <Text
          textAlign={"center"}
          as="p"
          fontSize={{ base: 30, lg: 40 }}
          lineHeight={1}
          fontFamily="DMSansRegular"
        >
          Thanks for choosing us—where top-notch quality meets wallet-friendly
          prices, with a dash of good vibes!
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

export default BuyWeed;
