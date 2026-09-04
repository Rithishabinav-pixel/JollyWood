"use client";

import { useActionState } from "react";
import Link from "next/link";
import { updateStoryContent } from "./actions";
import style from "../../admin.module.css";

export default function StoryForm({ content }) {
  const [contentState, contentAction, contentPending] = useActionState(updateStoryContent, undefined);

  return (
    <form action={contentAction} className={style.form}>
      {contentState?.error && <p className={style.error}>{contentState.error}</p>}

      <input type="hidden" name="id" value={content.id} />

      <div className={style.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" defaultValue={content.name} required />
      </div>

      <div className={style.field}>
        <label htmlFor="testimonial">Testimonial Text</label>
        <textarea id="testimonial" name="testimonial" defaultValue={content.testimonial} required />
      </div>

      <div className={style.field}>
        <label htmlFor="link">Link</label>
        <input
          id="link"
          name="link"
          type="text"
          placeholder="/about or https://example.com"
          defaultValue={content.link}
          required
        />
      </div>

      <div className={style.formActions}>
        <button className={style.btn} type="submit" disabled={contentPending}>
          {contentPending ? "Saving..." : "Save Content"}
        </button>
        <Link href="/admin/stories" className={`${style.btn} ${style.btnSecondary}`}>
          Cancel
        </Link>
      </div>
    </form>
  );
}
