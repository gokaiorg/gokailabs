import { Box, Text } from "@chakra-ui/react";
import { locations } from "../config/locations";
import { LocationsItem } from "./LocationsItem";

export const LocationsList = () => {
  return (
    <Box mt={4} mb="10">
      <Text
        as={"p"}
        textAlign={"center"}
        fontSize={{ base: 18, lg: 22 }}
        fontFamily={"DMSansRegular"}
        mb={10}
        lineHeight={1}
      >
        Gokai Labs powers global brands with creative web design and expert SEO
        from our vibrant hubs in Paris and Phuket.
      </Text>
      <Text
        as="h2"
        fontSize="xl"
        mb={2}
        fontFamily="DMSansBlack"
        textAlign={"center"}
      >
        Find a Web Agency Near You
      </Text>
      <Box
        as="ul"
        aria-label="Find a Web Agency Near You"
        display={"flex"}
        flexWrap={"wrap"}
      >
        {locations.map((location) => (
          <LocationsItem key={location.slug} location={location} />
        ))}
      </Box>
    </Box>
  );
};
