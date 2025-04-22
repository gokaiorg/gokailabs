// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: "Gokai Labs Creative Web Design & SEO Agency",
  description:
    "Gokai Labs: Your creative web design and SEO agency. We craft stunning websites and boost your online visibility with expert SEO strategies. Let's grow your brand!",
  shortname: "Gokai Labs",
  image: `${dappHostname}/media/logo-gokai-labs-creative-web-design-seo-agency.webp`,
};
