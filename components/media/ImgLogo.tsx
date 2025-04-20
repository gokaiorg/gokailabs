import Image from "next/image";

export const ImgLogo = () => {
  return (
    <Image
      src="/media/logo-gokai-labs-creative-web-design-seo-agency.webp"
      alt="Creative Web Design & SEO Agency"
      title="Creative Web Design & SEO Agency"
      width={120}
      height={91}
      style={{ objectFit: "contain" }}
      priority={true}
      sizes="95px"
      quality={75}
    />
  );
};
