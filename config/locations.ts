export type Location = {
  slug: string;
  name: string;
  hours: string;
  address: string;
  tel: string;
  addresLink: string;
  reviewLink: string;
  description: string;
  descSeo: string;
  details: string;
  mapLink: string;
  videoLink: string;
  imagesOg: string;
  images: string[];
  socialLinks: { label: string; link: string }[];
};

export const locations: Location[] = [
  {
    slug: "paris",
    name: "Top Creative Web Agency in Paris",
    hours: "Everyday 14h-2h.",
    tel: "+33619893218",
    address: "1 Square du Thimerais, 75017 Paris, France",
    addresLink: "https://maps.app.goo.gl/sMbFu5aQEVaXRZdDA",
    reviewLink: "https://g.page/r/CYOr82juHaKhEBM/review",
    details: "Cannabis loundge. Cafe. PS5. 👻💨",
    description:
      "Gokai Labs Paris embodies the essence of creativity and innovation in the heart of France’s cultural capital. Our Paris-based digital agency specializes in crafting visually stunning, user-centric websites that resonate with audiences and drive conversions. With a team of expert designers and developers, we create responsive, high-performance websites tailored to your brand’s unique identity. Our mastery of search engine optimization (SEO) ensures your site not only looks exceptional but also ranks prominently, attracting the right visitors. Serving both local Parisian businesses and global brands, we blend artistic flair with data-driven strategies to deliver measurable results. At Gokai Labs Paris, we’re dedicated to turning your vision into a digital masterpiece. Whether you need a captivating website, a powerful SEO campaign, or a seamless combination of both, our Paris team is here to elevate your online presence. Partner with us to transform your brand and thrive in the digital world",
    descSeo:
      "Gokai Labs Paris: Creative web design & expert SEO. Stunning websites and top rankings from our Paris hub. Elevate your brand today!",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.052292914441!2d2.2946603769076286!3d48.88781739863454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f99e4c3057f%3A0xd556d93ffc59e7c5!2s1%20Sq.%20du%20Thimerais%2C%2075017%20Paris%2C%20France!5e1!3m2!1sen!2sth!4v1745053589495!5m2!1sen!2sth",
    videoLink: "https://www.youtube.com/embed/YVodYua9kBk",
    imagesOg: "green-ghost-best-degen-weed-shop-delivery-rawai.webp",
    images: [
      "/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-01.webp",
      "/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-02.webp",
      "/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-03.webp",
      "/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-04.webp",
      "/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-05.webp",
      "/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-06.webp",
    ],
    socialLinks: [
      {
        label: "Trip Advisor",
        link: "https://www.tripadvisor.com.sg/Attraction_Review-g297934-d28129979-Reviews-Green_Ghost-Rawai_Phuket.html",
      },
      {
        label: "WEED.TH",
        link: "https://weed.th/shop/2ab3e52b-83f8-4a73-a96f-a60e04774a17",
      },
      {
        label: "Wongnai",
        link: "https://www.wongnai.com/restaurants/3106120Va-green-ghost-best-degen-weed-shop-and-delivery-rawai",
      },
      {
        label: "High Thailand",
        link: "https://www.highthailand.com/location/green-ghost-2",
      },
      {
        label: "Apple Map",
        link: "https://maps.apple.com/?address=26/16%204024,%20Phuket,%20Phuket%2083130,%20Thailand&auid=3541566368782066682&ll=7.804892,98.336731&lsp=9902&q=Green%20Ghost",
      },
    ],
  },
  // {
  //   slug: 'karon',
  //   name: 'Best Degen Weed Shop and Delivery in Karon',
  //   hours: 'Monday/Saturday 18h-00h.',
  //   address: '452 Patak Road, Karon, Mueang Phuket District, Phuket 83100',
  //   addresLink: 'https://maps.app.goo.gl/bcFR9XFSS9M29HK7A',
  //   reviewLink: 'https://g.page/r/CcPCrFf7RfRNEBM/review',
  //   details: 'Smoking area 💨',
  //   description:
  //     "Discover Gokai Labs, the best degen weed shop in Karon, your ultimate destination for top-quality cannabis in Phuket. Located conveniently between Kata and Patong, we offer an extensive menu featuring premium cannabis buds, diverse strains, delicious edibles, and more. Whether you're a local or a visitor, our shop is dedicated to providing the finest cannabis experience in the Kata-Karon community. At Green Ghost, convenience is a priority. Easily find us near Tops Daily and enjoy our range of services, including fast delivery in Patong and Kata Karon, quick pick-up, and a speedy drive-thru option. Our cannabis club members receive special discounts, and if you have a WEED.TH medicinal cannabis card or NFTs, you'll enjoy exclusive benefits tailored just for you. We take pride in being a welcoming cannabis hub that caters to all your needs. Browse our diverse menu, featuring the best weed strains in Kata and Karon. Whether you're enjoying the sun at Karon or Kata Beach or exploring the vibrant Karon Market and serene Karon Temple, let Green Ghost enhance your Phuket experience. Come visit us today and explore our selection of unique cannabis accessories, handcrafted edibles, and exclusive merchandise that reflect the vibrant local culture. Meet fellow cannabis enthusiasts, unwind in our cozy smoking area, and immerse yourself in the dynamic spirit of Phuket. At Green Ghost, every visit is more than just a transaction – it’s an invitation to be part of our community.",
  //   descSeo:
  //     'Find the best cannabis in Kata and Karon at Gokai Labs. Premium weed, diverse menu, fast delivery, and discounts for club members. Discover more today!',
  //   mapLink:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19948.08938185026!2d98.28800084789953!3d7.836029524961073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025d1fcbc13ff%3A0x4df445fb57acc2c3!2sGreen%20Ghost%20%F0%9F%8C%BF%F0%9F%91%BB%20Best%20Degen%20Weed%20Shop%20and%20Delivery!5e1!3m2!1sen!2sth!4v1725181876356!5m2!1sen!2sth',
  //   videoLink: 'https://www.youtube.com/embed/lGpxomxAsoI?si=peQos07ZiOAWWeP6',
  //   imagesOg: 'green-ghost-best-degen-weed-shop-delivery-kata-karon.webp',
  //   images: [
  //     '/media/green-ghost-degen-weed-shop-kata-karon-phuket-thailand-01.webp',
  //     '/media/green-ghost-degen-weed-shop-kata-karon-phuket-thailand-02.webp',
  //     '/media/green-ghost-degen-weed-shop-kata-karon-phuket-thailand-03.webp',
  //     '/media/green-ghost-degen-weed-shop-kata-karon-phuket-thailand-04.webp',
  //     '/media/green-ghost-degen-weed-shop-kata-karon-phuket-thailand-05.webp',
  //     '/media/green-ghost-degen-weed-shop-kata-karon-phuket-thailand-06.webp',
  //   ],
  //   socialLinks: [
  //     {
  //       label: 'Trip Advisor',
  //       link: 'https://www.tripadvisor.com.sg/Attraction_Review-g1215780-d26518105-Reviews-Green_Ghost-Karon_Phuket.html',
  //     },
  //     {
  //       label: 'WEED.TH',
  //       link: 'https://weed.th/shop/fe835e3b-d043-4672-af43-8cc039aa013b',
  //     },
  //     {
  //       label: 'Wongnai',
  //       link: 'https://www.wongnai.com/restaurants/3138274cx-green-ghost-best-degen-weed-shop-and-delivery-karon',
  //     },
  //     {
  //       label: 'High Thailand',
  //       link: 'https://www.highthailand.com/location/green-ghost',
  //     },
  //     {
  //       label: 'Apple Map',
  //       link: 'https://maps.apple.com/?address=42/2%204028,%20Phuket,%20Phuket%2083100,%20Thailand&auid=11391650870587444137&ll=7.847196,98.298610&lsp=9902&q=Green%20Ghost%20Karon%20%7C%20Weed%20Delivery',
  //     },
  //   ],
  // },
  {
    slug: "phuket",
    name: "Top Creative Web Agency in Phuket",
    hours: "Everyday 8h-2h.",
    tel: "+66949486177",
    address: "26, 19 Wiset Rd, Rawai, Amphoe Mueang Phuket, Phuket 83130",
    addresLink: "https://maps.app.goo.gl/vLRAqzczGYxm339T8",
    reviewLink: "https://g.page/r/CdEZf4I4iGn8EBE/review",
    details: "Delivery. No in-store shopping 🚚",
    description:
      "At Gokai Labs Phuket, we fuse tropical inspiration with cutting-edge digital expertise to elevate brands worldwide. Nestled in the vibrant heart of Phuket, our creative web agency designs breathtaking, user-focused websites that captivate audiences and drive engagement. Our team of skilled designers and developers crafts responsive, high-performance sites tailored to your brand’s unique vision. Beyond aesthetics, we excel in search engine optimization (SEO), ensuring your website ranks high and attracts the right audience. From local businesses to global enterprises, we empower clients with strategies that blend creativity and data-driven results. At Gokai Labs Phuket, we’re passionate about transforming ideas into digital success stories. Whether you need a stunning website, a robust SEO campaign, or both, our Phuket team delivers solutions that make your brand stand out in a crowded digital landscape. Partner with us to unlock your online potential and achieve measurable growth. Let’s create something extraordinary together",
    descSeo:
      "Gokai Labs Phuket: Creative web design & expert SEO. Stunning websites and top rankings from our vibrant Phuket hub. Elevate your brand today!",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4987.6523626155085!2d98.32563230000001!3d7.7832583999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502f1d9d1fad3b%3A0xa486c37ffbc36a3b!2sGokai%20Labs!5e1!3m2!1sen!2sth!4v1745054777188!5m2!1sen!2sth",
    videoLink: "https://www.youtube.com/embed/8x0aKDRP4q4",
    imagesOg: "green-ghost-best-degen-weed-shop-delivery-phuket-thailand.webp",
    images: [
      "/media/green-ghost-degen-weed-shop-phuket-thailand-cannabis-delivery-01.webp",
      "/media/green-ghost-degen-weed-shop-phuket-thailand-cannabis-delivery-02.webp",
      "/media/green-ghost-degen-weed-shop-phuket-thailand-cannabis-delivery-03.webp",
      "/media/green-ghost-degen-weed-shop-phuket-thailand-cannabis-delivery-04.webp",
      "/media/green-ghost-degen-weed-shop-phuket-thailand-cannabis-delivery-05.webp",
      "/media/green-ghost-degen-weed-shop-phuket-thailand-cannabis-delivery-06.webp",
    ],
    socialLinks: [
      {
        label: "WEED.TH",
        link: "https://weed.th/shop/0d9dde2a-13bd-4167-b063-577af34971e8",
      },
      {
        label: "Apple Map",
        link: "https://maps.apple.com/?address=17%20Thalang%20Rd.,%20Phuket,%20Phuket%2083000,%20Thailand&auid=4961311243724311645&ll=7.884924,98.387895&lsp=9902&q=Green%20Ghost%20Phuket%20Town%20%7C%20Weed%20Delivery",
      },
    ],
  },
];

export function getShopBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getLocations(): Location[] {
  return locations;
}

export function getLocationImageUrls(locations: Location): string[] {
  return locations.images.map((image) => `/media/${image}`);
}
