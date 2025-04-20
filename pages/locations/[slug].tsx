import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { getLocations, Location } from "../../config/locations";
import { MainLayout } from "../../components/MainLayout";
import { Header } from "../../components/Header";
import { NavHeader } from "../../components/NavHeader";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Review } from "../../components/Review";
import { LinkPrimary } from "../../components/LinkPrimary";

interface LocationPageProps {
  location: Location;
}

export default function LocationPage({ location }: LocationPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>{location.name} | Gokai Labs</title>
        <meta name="description" content={location.descSeo} />
        <meta property="og:title" content={`${location.name} | Gokai Labs`} />
        <meta property="og:description" content={location.descSeo} />
        <meta
          property="og:image"
          content={`https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp`}
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content={`https://gokai.org/locations/${location.slug}`}
        />
        <meta name="twitter:title" content={`${location.name}  | Gokai Labs`} />
        <meta name="twitter:description" content={location.descSeo} />
        <meta
          name="twitter:image"
          content={`https://gokai.org/gokai-labs-creative-web-design-seo-agency.webp`}
        />
        <meta
          name="twitter:url"
          content={`https://gokai.org/locations/${location.slug}`}
        />
      </Head>
      <MainLayout>
        <Header>
          <NavHeader enabled={["auth"]} />
        </Header>
        <Box as="main">
          <Box
            as="span"
            cursor={"pointer"}
            color={"all.secondary"}
            display={"flex"}
            fontFamily={"DMSansBlack"}
            onClick={handleBack}
            title={"BACK"}
          >
            {"< Back"}
          </Box>
          <Box
            as="h1"
            fontSize={{ base: 24, lg: 40 }}
            lineHeight={1}
            maxW={{ base: "100%", md: "80%", lg: "45%" }}
            m={"auto"}
            color="all.primary"
            fontFamily="DMSansBlack"
            my={{ base: 4 }}
            textAlign="center"
          >
            {location.name}
          </Box>
          <Box
            display={{
              base: "block",
              md: "flex",
            }}
            flexWrap="wrap"
            gap={4}
          >
            <Box flex="1" w={{ base: "100%", md: "50%" }} mb={4}>
              <Box
                as="section"
                aria-labelledby={`${location.name} Google Map`}
                width="100%"
              >
                <Text
                  as="h2"
                  fontSize={{ base: 18 }}
                  lineHeight={1}
                  fontFamily="DMSansBlack"
                  mb={2}
                  textAlign="left"
                >
                  Location
                </Text>
                <Box
                  as="div"
                  position="relative"
                  pb="56.25%"
                  overflow="hidden"
                  width="100%"
                  mb={2}
                >
                  <iframe
                    src={location.mapLink}
                    title={`${location.name} Google Map`}
                    style={{
                      border: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
                <Text
                  as="h3"
                  fontSize={{ base: 16 }}
                  lineHeight={1}
                  fontFamily="DMSansBlack"
                  mb={2}
                  textAlign="left"
                >
                  Address
                </Text>
                <Link
                  href={location.addresLink}
                  title={`${location.name} Google Map`}
                  passHref
                >
                  <Box
                    display="flex"
                    mt={2}
                    fontSize="2xl"
                    lineHeight={1}
                    fontFamily="DMSansRegular"
                    _hover={{ color: "all.secondary" }}
                  >
                    <Box fontSize={"xl"}>📍</Box>
                    <Text as="h4" ml={2}>
                      {location.address}
                    </Text>
                  </Box>
                </Link>
                <Text
                  as="h3"
                  fontSize={{ base: 16 }}
                  mt={4}
                  lineHeight={1}
                  fontFamily="DMSansBlack"
                  textAlign="left"
                >
                  Phone
                </Text>
                <Text
                  as="div"
                  fontSize="xl"
                  color="all.primary"
                  fontFamily="DMSansBlack"
                  mb={2}
                >
                  <Link
                    title={`Call: ${location.tel}`}
                    href={`tel:${location.tel}`}
                    passHref
                  >
                    {location.tel}
                  </Link>
                </Text>
              </Box>
            </Box>
            <Box flex="1" w={{ base: "100%", md: "50%" }}>
              <Box
                bgColor="ghostVerse.dark.lighter"
                as="p"
                fontSize={{ base: 26 }}
                lineHeight={1}
                fontFamily="DMSansRegular"
                w={{ base: "100%" }}
                p={4}
              >
                {location.description}
              </Box>
            </Box>
          </Box>
          <Link href={"/locations"} passHref title="Find an agency Near you">
            <LinkPrimary title="Find an agency Near you" />
          </Link>
          <Review />
        </Box>
      </MainLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  LocationPageProps
> = async ({ params }) => {
  if (!params) return { notFound: true };

  const locations = getLocations(); // Fetch shops using the getShops function
  const location = locations.find((s) => s.slug === params.slug); // Find the shop based on the slug from params

  return location ? { props: { location } } : { notFound: true }; // Return the shop if found, or return notFound if not
};
