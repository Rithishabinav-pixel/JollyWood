import AnnouncementForm from "../AnnouncementForm";
import { createAnnouncement } from "../actions";
import style from "../../../admin.module.css";

export default function NewAnnouncementPage() {
  return (
    <>
      <div className={style.pageHeader}>
        <h1>Add Announcement</h1>
      </div>
      <div className={style.card}>
        <AnnouncementForm action={createAnnouncement} />
      </div>
    </>
  );
}
