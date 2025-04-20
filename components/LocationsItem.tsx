import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Location } from "../config/locations";

type LocationsItemProps = {
  location: Location;
};

export const LocationsItem = ({ location }: LocationsItemProps) => {
  return (
    <Box
      as="li"
      aria-label={`${location.name}`}
      listStyleType={"none"}
      display="flex"
      flexDirection="column"
      borderRadius={10}
      mb={4}
      w={{ base: "100%", md: "32%" }}
      bg="ghostVerse.dark.lighter"
      backdropFilter="blur(3px)"
      p={4}
      mr={2}
    >
      <Link href={`locations/${location.slug}`} title={`${location.name}`}>
        <Text
          as="h3"
          fontSize={18}
          fontFamily="DMSansBlack"
          color="all.secondary"
          _hover={{ textDecoration: "underline" }}
        >
          {location.name}
        </Text>
      </Link>
      <Box
        as="section"
        aria-labelledby={`${location.name} Google Map`}
        w="100%"
        position="relative"
        pb="56.25%"
        overflow="hidden"
      >
        <iframe
          src={location.mapLink}
          title={`${location.name} on Google Map`}
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
      <Link href={location.addresLink} title={`${location.name} on Google Map`}>
        <Box
          display="flex"
          my={2}
          fontSize="2xl"
          lineHeight={1}
          fontFamily="DMSansRegular"
          _hover={{ color: "all.secondary" }}
        >
          <Box fontSize={"xl"}>📍</Box>
          <Text as="h4" ml={2} fontSize={{ base: 18 }}>
            {location.address}
          </Text>
        </Box>
      </Link>
      <Box
        as="li"
        display="flex"
        alignItems="center"
        aria-label="Accommodations"
      >
        📱
        <Box
          as="span"
          ml={2}
          mb={1}
          fontSize={{ base: 18 }}
          _hover={{ color: "all.secondary" }}
        >
          <Link
            title={`Call: ${location.tel}`}
            href={`tel:${location.tel}`}
            passHref
          >
            {location.tel}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
