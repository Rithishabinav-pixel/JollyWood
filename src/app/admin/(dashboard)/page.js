import Link from "next/link";
import { prisma } from "@/lib/prisma";
import style from "./components/adminDashboard.module.css";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [offerCount, storyCount, announcementCount] = await Promise.all([
    prisma.offer.count(),
    prisma.visitorStory.count(),
    prisma.announcement.count(),
  ]);

  const stats = [
    { label: "Offers", value: offerCount, href: "/admin/offers" },
    { label: "Visitor Stories", value: storyCount, href: "/admin/stories" },
    { label: "Announcements", value: announcementCount, href: "/admin/announcements" },
  ];

  return (
    <div>
      <p className={style.welcomeText}>Welcome to the Admin Dashboard</p>
      <div className={style.statGrid}>
        {stats.map((stat) => (
          <Link key={stat.href} href={stat.href} className={style.statCard}>
            <span className={style.statLabel}>{stat.label}</span>
            <span className={style.statValue}>{stat.value}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
