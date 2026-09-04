import Link from "next/link";
import { prisma } from "@/lib/prisma";
import StoriesListTabs from "./StoriesListTabs";
import style from "../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function AdminStoriesPage() {
  const [contents, images] = await Promise.all([
    prisma.visitorStoryContent.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.visitorStoryImage.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Visitor Stories</h1>
        <Link href="/admin/stories/new" className={style.btn}>
          Add Story
        </Link>
      </div>

      <StoriesListTabs contents={contents} images={images} />
    </>
  );
}
