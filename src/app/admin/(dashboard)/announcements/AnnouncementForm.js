"use client";

import { useActionState } from "react";
import Link from "next/link";
import style from "../../admin.module.css";

export default function AnnouncementForm({ action, announcement }) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className={style.form}>
      {state?.error && <p className={style.error}>{state.error}</p>}

      <div className={style.field}>
        <label htmlFor="text">Announcement Text</label>
        <textarea id="text" name="text" defaultValue={announcement?.text || ""} required />
      </div>

      <div className={style.field}>
        <label htmlFor="link">Link</label>
        <input
          id="link"
          name="link"
          type="text"
          placeholder="/offers or https://example.com"
          defaultValue={announcement?.link || "#"}
        />
      </div>

      <div className={style.field}>
        <label htmlFor="order">Order</label>
        <input id="order" name="order" type="number" defaultValue={announcement?.order ?? 0} />
        <span className={style.hint}>Lower numbers appear first.</span>
      </div>

      <div className={`${style.field} ${style.checkboxField}`}>
        <input
          id="isActive"
          name="isActive"
          type="checkbox"
          defaultChecked={announcement ? announcement.isActive : true}
        />
        <label htmlFor="isActive">Active</label>
      </div>

      <div className={style.formActions}>
        <button className={style.btn} type="submit" disabled={pending}>
          {pending ? "Saving..." : "Save Announcement"}
        </button>
        <Link href="/admin/announcements" className={`${style.btn} ${style.btnSecondary}`}>
          Cancel
        </Link>
      </div>
    </form>
  );
}
