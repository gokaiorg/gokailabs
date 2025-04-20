import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const staticUrls = [
    "/",
    "/about",
    "/contact",
    "/locations",
    "/projects",
    "/payment",
    "/projects/green-ghost",
    "/projects/ghostverse",
    "/projects/amann-inkspiration",
    "/projects/art-fate",
    "/sitemap",
  ];
  res.status(200).json(staticUrls);
}
