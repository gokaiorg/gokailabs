import { ReviewItem } from "./ReviewItem";
import { review } from "../config/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import { Box, Text } from "@chakra-ui/react";

export const Review = () => {
  if (!Array.isArray(review) || review.length === 0) return null;

  return (
    <Box
      as="section"
      aria-labelledby="Gokai Labs Partners Reviews"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text
        as="h3"
        fontSize={{ base: 20, lg: 28 }}
        lineHeight={1}
        fontFamily="DMSansBlack"
        my={2}
        textAlign="center"
      >
        Trusted by Bests: Our Success Stories
      </Text>
      <Box w="100%">
        <Swiper
          autoHeight={true}
          spaceBetween={10}
          slidesPerView="auto"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          autoplay={{
            delay: 8000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, EffectCoverflow]} // Pass modules here
        >
          {review.map((homeHeroItem, index) => (
            <SwiperSlide key={index}>
              <ReviewItem {...homeHeroItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
