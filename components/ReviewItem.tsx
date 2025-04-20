import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { TestimonialStars } from "./TestimonialStars";

interface ReviewItemProps {
  title: string;
  review: string;
  reviewLink: string;
}

export const ReviewItem: FC<ReviewItemProps> = ({
  title,
  review,
  reviewLink,
}) => {
  return (
    <Box
      as="article"
      display={"flex"}
      borderRadius={10}
      my={"5"}
      bgColor={"ghostVerse.dark.lighter"}
      p={"5"}
    >
      <Box fontSize={"5xl"}>👍</Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        fontWeight={"black"}
        color={"white"}
        w={"80%"}
        fontFamily={"DMSansRegular"}
        px={4}
        backdropFilter={"blur(3px)"}
      >
        <Text
          as={"h4"}
          fontSize={{ base: 20, lg: 25 }}
          fontFamily={"DMSansRegular"}
        >
          {title}
        </Text>
        <TestimonialStars />
        <Text as={"p"} mt={4} fontSize={{ base: 18, lg: 22 }} lineHeight={"1"}>
          {review}
        </Text>
        <Link href={reviewLink} title={"Check the online profile"} passHref>
          <Text
            display={"inline-flex"}
            color={"all.secondary"}
            fontSize={{ base: "xl" }}
            mt={4}
            fontFamily={"DMSansRegular"}
          >
            Profile
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
