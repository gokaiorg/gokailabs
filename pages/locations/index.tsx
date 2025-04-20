import type { GetServerSideProps, NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { MainLayout } from "../../components/MainLayout";
import { Header } from "../../components/Header";
import { NavHeader } from "../../components/NavHeader";
import { HomeSectionTitle } from "../../components/HomeSectionTitle";
import Head from "next/head";
import { LocationsList } from "../../components/LocationsList";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const WeedShopNearMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Best Weed Shop Near Me in Phuket | Gokai Labs</title>
        <meta
          name="description"
          content="Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!"
        />
        <meta
          property="og:title"
          content="Best Weed Shop Near Me in Phuket | Gokai Labs"
        />
        <meta
          property="og:description"
          content="Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!"
        />
        <meta
          property="og:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://gokai.org/locations" />
        <meta
          name="twitter:title"
          content="Best Weed Shop Near Me in Phuket | Gokai Labs"
        />
        <meta
          name="twitter:description"
          content="Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!"
        />
        <meta
          name="twitter:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta name="twitter:url" content="https://gokai.org/locations" />
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
          my={4}
          lineHeight={1}
        >
          <Box fontSize={"5xl"}>📍</Box>
          <HomeSectionTitle title="Locations" />
        </Box>
        <LocationsList />
      </MainLayout>
    </>
  );
};

export default WeedShopNearMe;
