import { prisma } from "@/lib/prisma";
import BulkUploadForm from "../BulkUploadForm";
import style from "../../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function BulkGalleryUploadPage() {
  const categories = await prisma.galleryCategory.findMany({ orderBy: { name: "asc" } });

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Bulk Upload Gallery Images</h1>
      </div>
      <div className={style.card}>
        <BulkUploadForm categories={categories} />
      </div>
    </>
  );
}
