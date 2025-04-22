import type { GetServerSideProps, NextPage } from "next";
import { MainLayout } from "../components/MainLayout";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { HomeSectionTitle } from "../components/HomeSectionTitle";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import { NavContact } from "../components/NavContact";
import Image from "next/image";
import { LocationsList } from "../components/LocationsList";
import { motion, useScroll, useTransform } from "framer-motion";
import { TeamBlock } from "../components/TeamBlock";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const contactJSONLD = {
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+66 94 948 6177",
    contactType: "Customer Service",
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
  sameAs: ["https://www.medium.com/gokailabs", "https://x.com/gokailabs"],
};

const Contact: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <>
      <Head>
        <title>Contact Web Design & SEO Agency | Gokai Labs</title>
        <meta
          name="description"
          content="Reach Gokai Labs in Paris & Phuket for stunning web design, UX, and expert SEO. Connect to transform your brand with innovative digital solutions!"
        />
        <meta
          property="og:title"
          content="Contact Web Design & SEO Agency | Gokai Labs"
        />
        <meta
          property="og:description"
          content="Reach Gokai Labs in Paris & Phuket for stunning web design, UX, and expert SEO. Connect to transform your brand with innovative digital solutions!"
        />
        <meta
          property="og:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://gokai.org/contact" />
        <meta
          name="twitter:title"
          content="Contact Web Design & SEO Agency | Gokai Labs"
        />
        <meta
          name="twitter:description"
          content="Reach Gokai Labs in Paris & Phuket for stunning web design, UX, and expert SEO. Connect to transform your brand with innovative digital solutions!"
        />
        <meta
          name="twitter:image"
          content="https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp"
        />
        <meta name="twitter:url" content="https://gokai.org/contact" />
        <script type="application/ld+json">
          {JSON.stringify(contactJSONLD)}
        </script>
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
              <HomeSectionTitle title="Contact" />
              <Text
                as="p"
                fontSize={{ base: 20, lg: 28 }}
                lineHeight={{ base: "25px", md: "30px" }}
                fontFamily="DMSansRegular"
                mt={5}
                textAlign={"center"}
              >
                Gokai Labs transforms your digital vision from Paris and Phuket.
                We craft stunning websites, seamless UX, and top-tier SEO,
                fueled by AI personalization and trends like short-form video.
                Our creative, data-driven approach ensures your brand shines.
                Ready to elevate your online presence? Connect with us to
                discuss your project and unlock your potential. Let’s build
                something extraordinary!
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={{ base: "start", lg: "center" }}
            alignItems={{ base: "start", lg: "center" }}
            mb={10}
            gap={6}
          >
            <Box textAlign="left" fontFamily="DMSansBlack">
              <Text as="h2" fontSize="xl" mb={2}>
                Call us
              </Text>
              <Text
                as="div"
                fontSize="2xl"
                color="all.primary"
                p={2}
                bgColor="ghostVerse.dark.lighter"
              >
                <Link
                  title={`Call: +66949486177`}
                  href="tel:+66949486177"
                  passHref
                >
                  +66949486177
                </Link>
              </Text>
            </Box>
            <Box textAlign="left">
              <Text as="h2" fontSize="xl" mb={2} fontFamily="DMSansBlack">
                Text us
              </Text>
              <NavContact />
            </Box>
          </Box>
          <TeamBlock />

          <LocationsList />
        </Box>
      </MainLayout>
    </>
  );
};

export default Contact;
