import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CategoryForm from "../../CategoryForm";
import style from "../../../../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function EditGalleryCategoryPage({ params }) {
  const { id } = await params;
  const category = await prisma.galleryCategory.findUnique({ where: { id } });

  if (!category) {
    notFound();
  }

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Edit Gallery Category</h1>
      </div>
      <div className={style.card}>
        <CategoryForm category={category} />
      </div>
    </>
  );
}
