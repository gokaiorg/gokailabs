import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const staticUrls = [
    "/",
    "/about",
    "/contact",
    "/locations",
    "/projects",
    "/payment",
    "/project/green-ghost",
    "/project/ghostverse",
    "/project/amann-inkspiration",
    "/sitemap",
  ];
  res.status(200).json(staticUrls);
}
