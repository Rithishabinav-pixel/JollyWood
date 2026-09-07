import { prisma } from "@/lib/prisma";
import GalleryImageForm from "../GalleryImageForm";
import style from "../../../admin.module.css";

export default async function NewGalleryImagePage() {
  const categories = await prisma.galleryCategory.findMany({ orderBy: { name: "asc" } });

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Add Gallery Image</h1>
      </div>
      <div className={style.card}>
        <GalleryImageForm categories={categories} />
      </div>
    </>
  );
}
