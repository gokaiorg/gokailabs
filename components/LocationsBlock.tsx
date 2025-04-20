import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { locations } from "../config/locations";
import { LocationsItem } from "./LocationsItem";
import { LinkPrimary } from "./LinkPrimary";

export const LocationsBlock = () => {
  return (
    <Box
      as="section"
      aria-labelledby="Best Creative Digital Web Agencies"
      display={"flex"}
      my={10}
      flexWrap={"wrap"}
      alignItems={"stretch"}
    >
      <Text
        as={"h2"}
        fontSize={{ base: 24, lg: 30 }}
        lineHeight={1}
        fontFamily={"DMSansBlack"}
        my={{ base: 4 }}
        textAlign={"left"}
        display={"flex"}
        w={"100%"}
        alignItems={"center"}
        width={"100%"}
      >
        The Best Creative Digital Web Agencies
      </Text>
      <Text
        as={"p"}
        fontSize={{ base: 18, lg: 22 }}
        lineHeight={1}
        fontFamily={"DMSansRegular"}
      >
        From Paris to Phuket, Gokai Labs delivers unparalleled creativity and
        results. Our expert team crafts stunning websites and boosts rankings
        with cutting-edge SEO, empowering brands worldwide from our dynamic hubs
        in Paris and Phuket.
      </Text>
      <Box
        as="ul"
        aria-label="Web Agencies List"
        listStyleType={"none"}
        w={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        mt={5}
      >
        {locations.map((location) => (
          <LocationsItem key={location.slug} location={location} />
        ))}
      </Box>
      <Link
        href={"/locations"}
        passHref
        title="Best Creative Digital Web Agencies"
      >
        <LinkPrimary title="Find an agency" />
      </Link>
    </Box>
  );
};
