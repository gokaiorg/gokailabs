import { Text } from "@chakra-ui/react";
import { FC } from "react";

interface LinkSecondaryProps {
  title: string;
}

export const LinkSecondary: FC<LinkSecondaryProps> = ({ title }) => {
  return (
    <Text
      as="span"
      display="inline-flex"
      fontFamily="DMSansBlack"
      fontSize={{ base: "md", md: "lg" }}
      px={6}
      py={2}
      mt={5}
      mx="auto"
      whiteSpace={"nowrap"}
      borderRadius={"full"}
      color="all.primary"
      borderWidth={1}
      borderColor="black"
      bgColor="black"
      _hover={{
        bgColor: "all.secondary",
        color: "black",
      }}
    >
      {title}
    </Text>
  );
};
