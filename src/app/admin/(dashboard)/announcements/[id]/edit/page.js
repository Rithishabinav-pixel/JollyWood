import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AnnouncementForm from "../../AnnouncementForm";
import { updateAnnouncement } from "../../actions";
import style from "../../../../admin.module.css";

export default async function EditAnnouncementPage({ params }) {
  const { id } = await params;
  const announcement = await prisma.announcement.findUnique({ where: { id } });

  if (!announcement) {
    notFound();
  }

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Edit Announcement</h1>
      </div>
      <div className={style.card}>
        <AnnouncementForm action={updateAnnouncement.bind(null, id)} announcement={announcement} />
      </div>
    </>
  );
}
