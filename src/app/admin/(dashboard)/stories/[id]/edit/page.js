import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import StoryForm from "../../StoryForm";
import style from "../../../../admin.module.css";

export default async function EditStoryPage({ params }) {
  const { id } = await params;
  const content = await prisma.visitorStoryContent.findUnique({ where: { id } });

  if (!content) {
    notFound();
  }

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Edit Visitor Story Content</h1>
      </div>
      <div className={style.card}>
        <StoryForm content={content} />
      </div>
    </>
  );
}
