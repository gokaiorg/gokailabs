import { Text } from "@chakra-ui/react";
import { FC } from "react";

interface LinkPrimaryProps {
  title: string;
}

export const LinkPrimary: FC<LinkPrimaryProps> = ({ title }) => {
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
      color="black"
      borderWidth={1}
      borderColor="all.secondary"
      backgroundColor="all.secondary"
      _hover={{
        bgColor: "black",
        color: "all.secondary",
      }}
    >
      {title}
    </Text>
  );
};
