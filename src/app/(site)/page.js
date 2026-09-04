import { prisma } from "@/lib/prisma";
import HomePageClient from "./HomePageClient";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [offers, stories] = await Promise.all([
    prisma.offer.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.visitorStory.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return <HomePageClient offers={offers} stories={stories} />;
}
