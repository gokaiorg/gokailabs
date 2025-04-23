import type { GetServerSideProps, NextPage } from "next";
import { MainLayout } from "../components/MainLayout";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { HomeSectionTitle } from "../components/HomeSectionTitle";
import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const Payment: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <>
      <Head>
        <title>Secure Payment Transactions for Web Services | Gokai Labs</title>
        <meta
          name="description"
          content="Make secure payments for Gokai Labs’ web design, UX, and SEO services. Enjoy hassle-free transactions for our Paris & Phuket digital solutions!"
        />
        <meta
          property="og:title"
          content="Secure Payment Transactions for Web Services | Gokai Labs"
        />
        <meta
          property="og:description"
          content="Make secure payments for Gokai Labs’ web design, UX, and SEO services. Enjoy hassle-free transactions for our Paris & Phuket digital solutions!"
        />
        <meta
          property="og:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://gokai.org/payment" />
        <meta
          name="twitter:title"
          content="Secure Payment Transactions for Web Services | Gokai Labs"
        />
        <meta
          name="twitter:description"
          content="Make secure payments for Gokai Labs’ web design, UX, and SEO services. Enjoy hassle-free transactions for our Paris & Phuket digital solutions!"
        />
        <meta
          name="twitter:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta name="twitter:url" content="https://gokai.org/payment" />
      </Head>
      <MainLayout>
        <Header>
          <NavHeader enabled={["auth"]} />
        </Header>
        <Box as="main" my={4}>
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
                alt="Web Design & SEO Agency"
                title="Web Design & SEO Agency"
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
              <HomeSectionTitle title="Payment" />
              <Text
                as="p"
                fontSize={{ base: "30px", md: "34px" }}
                lineHeight={{ base: "25px", md: "30px" }}
                fontFamily="DMSansRegular"
                mt={5}
                textAlign={"center"}
              >
                Pay easily with Scan QR, Crypto, Wise, or PayPal. Secure, fast
                options for your weed orders at our shops!
              </Text>
            </Box>
          </Box>
          <Box
            as="section"
            aria-label="Payment method List"
            mx="auto"
            px={4}
            mb={10}
          >
            <Tabs
              fontSize={{ base: "sm", md: "xl" }}
              fontFamily={"DMSansBlack"}
              borderColor={"black"}
            >
              <TabList
                justifyContent="center"
                flexWrap="wrap"
                gap={2}
                color={"all.secondary"}
              >
                <Tab
                  _selected={{
                    bg: "ghostVerse.dark.lighter",
                    color: "all.secondary",
                    borderColor: "all.secondary",
                  }}
                >
                  Wise
                </Tab>
              </TabList>
              <TabPanels
                mt={4}
                fontSize="2xl"
                fontFamily="DMSansRegular"
                textAlign="center"
              >
                <TabPanel>
                  <Text>
                    Use Wise for international payments with low fees and
                    real-time rates.
                  </Text>
                  <Box mt={4} display="flex" justifyContent="center">
                    <Image
                      src="/media/wise-qr-payment-gokai-labs.webp"
                      alt="Wise QR Payment"
                      width={200}
                      height={200}
                    />
                  </Box>
                  <Text>@jeremyd240</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default Payment;
