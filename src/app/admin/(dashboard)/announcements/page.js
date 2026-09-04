import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "../../DeleteButton";
import { deleteAnnouncement, toggleAnnouncement } from "./actions";
import style from "../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function AdminAnnouncementsPage() {
  const announcements = await prisma.announcement.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] });

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Announcements</h1>
        <Link href="/admin/announcements/new" className={style.btn}>
          Add Announcement
        </Link>
      </div>

      <div className={style.card}>
        {announcements.length === 0 ? (
          <p className={style.empty}>No announcements yet. Click "Add Announcement" to create one.</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Text</th>
                <th>Order</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement) => (
                <tr key={announcement.id}>
                  <td>{announcement.text}</td>
                  <td>{announcement.order}</td>
                  <td>{announcement.isActive ? "Active" : "Disabled"}</td>
                  <td>
                    <div className={style.rowActions}>
                      <form action={toggleAnnouncement.bind(null, announcement.id, !announcement.isActive)}>
                        <button type="submit" className={`${style.btn} ${style.btnSecondary} ${style.smallBtn}`}>
                          {announcement.isActive ? "Disable" : "Enable"}
                        </button>
                      </form>
                      <Link href={`/admin/announcements/${announcement.id}/edit`} className={`${style.btn} ${style.btnSecondary} ${style.smallBtn}`}>
                        Edit
                      </Link>
                      <DeleteButton action={deleteAnnouncement.bind(null, announcement.id)} confirmText="Delete this announcement?">
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
