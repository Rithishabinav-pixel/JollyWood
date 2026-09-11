import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import GalleryImageForm from "../../GalleryImageForm";
import style from "../../../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function EditGalleryImagePage({ params }) {
  const { id } = await params;

  const [image, categories] = await Promise.all([
    prisma.galleryImage.findUnique({ where: { id }, include: { categories: true } }),
    prisma.galleryCategory.findMany({ orderBy: { name: "asc" } }),
  ]);

  if (!image) {
    notFound();
  }

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Edit Gallery Image</h1>
      </div>
      <div className={style.card}>
        <GalleryImageForm categories={categories} image={image} />
      </div>
    </>
  );
}
