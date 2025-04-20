import { Text } from "@chakra-ui/react";
import { FC } from "react";

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as={"h1"}
      fontSize={{ base: "20", md: "30" }}
      lineHeight={1}
      fontFamily={"DMSansBlack"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
    >
      {title}
    </Text>
  );
};
