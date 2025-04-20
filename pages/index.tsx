import type { GetServerSideProps, NextPage } from "next";
import { MainLayout } from "../components/MainLayout";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import Head from "next/head";
import { NavProject } from "../components/NavProject";
import { Review } from "../components/Review";
import { HomeHero } from "../components/HomeHero";
import { HighlightSecondary } from "../components/HighlightSecondary";
import { LocationsBlock } from "../components/LocationsBlock";
import { HighlightPrimary } from "../components/HighlightPrimary";
import { Box } from "@chakra-ui/react";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Creative Web Design & SEO Agency - Gokai Labs</title>
        <meta
          name="description"
          content="Gokai Labs: Your creative web design and SEO agency. We craft stunning websites and boost your online visibility with expert SEO strategies. Let\'s grow your brand!"
        />
        <meta
          property="og:title"
          content="Creative Web Design & SEO Agency - Gokai Labs"
        />
        <meta
          property="og:description"
          content="Gokai Labs: Your creative web design and SEO agency. We craft stunning websites and boost your online visibility with expert SEO strategies. Let\'s grow your brand!"
        />
        <meta
          property="og:image"
          content="https://gokai.org/media/logo-gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://gokai.org/" />
        <meta
          name="twitter:title"
          content="Creative Web Design & SEO Agency - Gokai Labs"
        />
        <meta
          name="twitter:description"
          content="Gokai Labs: Your creative web design and SEO agency. We craft stunning websites and boost your online visibility with expert SEO strategies. Let\'s grow your brand!"
        />
        <meta
          name="twitter:image"
          content="https://gokai.org/media/logo-gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta name="twitter:url" content="https://gokai.org/" />
      </Head>
      <MainLayout>
        <Header>
          <NavHeader enabled={["auth"]} />
        </Header>
        <Box as="main" aria-label="Main Content">
          <HomeHero />
          <HighlightPrimary />
          <NavProject />
          <HighlightSecondary />
          <LocationsBlock />
          <Review />
        </Box>
      </MainLayout>
    </>
  );
};

export default Home;
