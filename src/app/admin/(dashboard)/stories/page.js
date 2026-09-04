import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "../../DeleteButton";
import { deleteStory } from "./actions";
import style from "../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function AdminStoriesPage() {
  const stories = await prisma.visitorStory.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Visitor Stories</h1>
        <Link href="/admin/stories/new" className={style.btn}>
          Add Story
        </Link>
      </div>

      <div className={style.card}>
        {stories.length === 0 ? (
          <p className={style.empty}>No stories yet. Click "Add Story" to create one.</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Type</th>
                <th>Name</th>
                <th>Testimonial</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stories.map((story) => (
                <tr key={story.id}>
                  <td>
                    <img className={style.thumb} src={story.image} alt={story.name} />
                  </td>
                  <td>{story.imageType === "SQUARE" ? "Square" : "Landscape"}</td>
                  <td>{story.name}</td>
                  <td>{story.testimonial.slice(0, 60)}{story.testimonial.length > 60 ? "…" : ""}</td>
                  <td>
                    <div className={style.rowActions}>
                      <Link href={`/admin/stories/${story.id}/edit`} className={`${style.btn} ${style.btnSecondary} ${style.smallBtn}`}>
                        Edit
                      </Link>
                      <DeleteButton action={deleteStory.bind(null, story.id)} confirmText="Delete this story?">
                        Delete
                      </DeleteButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
