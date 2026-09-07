import { prisma } from "@/lib/prisma";
import GalleryListTabs from "./GalleryListTabs";
import style from "../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const [images, categories] = await Promise.all([
    prisma.galleryImage.findMany({
      include: { categories: { include: { galleryCategory: true } } },
      orderBy: { createdAt: "desc" },
    }),
    prisma.galleryCategory.findMany({
      include: { _count: { select: { images: true } } },
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Gallery</h1>
      </div>

      <GalleryListTabs images={images} categories={categories} />
    </>
  );
}
