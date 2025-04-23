const fetchSlugs = async () => {
  const categories = [
    "locations",
    "edibles",
    "concentrates",
    "strains",
    "gadgets",
    "weed-grower",
    "nft",
  ];
  const baseUrl = "https://gokai.org";
  const slugs = [];
  for (const category of categories) {
    try {
      const res = await fetch(`${baseUrl}/api/${category}`);
      if (res.ok) {
        const data = await res.json();
        const categorySlugs = (
          Array.isArray(data) ? data.map((item) => item.slug) : data.slugs || []
        ).map((slug) => `/${category}/${slug}`);
        slugs.push(...categorySlugs);
      }
    } catch (err) {
      console.log(`Error fetching ${category}:`, err);
    }
  }
  return slugs;
};

const staticUrls = [
  "/",
  "/about",
  "/contact",
  "/locations",
  "/project",
  "/project/green-ghost",
  "/project/ghostverse",
  "/project/amann-inkspiration",
  "/profile",
  "/sitemap",
];

module.exports = {
  siteUrl: "https://gokai.org",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  additionalPaths: async (config) => {
    const dynamicPaths = await fetchSlugs();
    const allPaths = [...staticUrls, ...dynamicPaths];
    return allPaths.map((path) => ({
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }));
  },
};
