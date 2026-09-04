import { prisma } from "@/lib/prisma";
import HomePageClient from "./HomePageClient";

export const dynamic = "force-dynamic";

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
