import { prisma } from "@/lib/prisma";
import HomePageClient from "./HomePageClient";

export const metadata = {
  title: { absolute: "Best Amusement Park & Resorts in Bangalore - Jollywood" },
  description:
    "Experience the ultimate fun at Jollywood - the best amusement park. A top destination among places to visit in Bangalore. The best resort for family and friends",
};

export const revalidate = 60;


export default async function Page() {
  const [offers, storyContents, storyImages] = await Promise.all([
    prisma.offer.findMany({
      where: { OR: [{ expiryDate: null }, { expiryDate: { gt: new Date() } }] },
      orderBy: { createdAt: "desc" },
    }),
    prisma.visitorStoryContent.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.visitorStoryImage.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return <HomePageClient offers={offers} storyContents={storyContents} storyImages={storyImages} />;
}
