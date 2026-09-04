import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import StoryForm from "../../StoryForm";
import { updateStory } from "../../actions";
import style from "../../../../admin.module.css";

export default async function EditStoryPage({ params }) {
  const { id } = await params;
  const story = await prisma.visitorStory.findUnique({ where: { id } });

  if (!story) {
    notFound();
  }

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Edit Visitor Story</h1>
      </div>
      <div className={style.card}>
        <StoryForm action={updateStory.bind(null, id)} story={story} />
      </div>
    </>
  );
}
