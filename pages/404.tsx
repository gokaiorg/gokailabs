import type { NextPage } from "next";
import { MainLayout } from "../components/MainLayout";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { HomeSectionTitle } from "../components/HomeSectionTitle";
import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

const ErrorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 | Gokai Labs</title>
        <meta
          name="description"
          content="You got lost bro! You should try something that keeps you focused."
        />
        <meta property="og:title" content="404 | Gokai Labs" />
        <meta
          property="og:description"
          content="You got lost bro! You should try something that keeps you focused."
        />
        <meta
          property="og:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://gokai.org/404" />
        <meta name="twitter:title" content="404 | Gokai Labs" />
        <meta
          name="twitter:description"
          content="You got lost bro! You should try something that keeps you focused."
        />
        <meta
          name="twitter:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta name="twitter:url" content="https://gokai.org/404" />
      </Head>
      <MainLayout>
        <Header>
          <NavHeader enabled={["auth"]} />
        </Header>
        <HomeSectionTitle title="404 - Oops, We've Lost the Digital Map!" />
        <Box
          display={"flex"}
          flexDirection={"column"}
          as="div"
          color={"white"}
          fontSize={{ base: "3xl" }}
          fontFamily={"DMSansRegular"}
          bgColor={"ghostVerse.dark.lighter"}
          mt={5}
          mb={6}
          p={4}
        >
          <Text
            as={"h2"}
            color={"white"}
            fontSize={{ base: "4xl" }}
            fontWeight={"black"}
            mb={4}
          >
            Looks like our Paris-Phuket teleportation glitch sent this page to a
            Web3 dimension—grab a coffee and head back to Gokai Labs’ homepage!
          </Text>
        </Box>
      </MainLayout>
    </>
  );
};

export default ErrorPage;
