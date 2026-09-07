"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createGalleryCategory, updateGalleryCategory } from "../actions";
import style from "../../../admin.module.css";

export default function CategoryForm({ category }) {
  const action = category ? updateGalleryCategory : createGalleryCategory;
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className={style.form}>
      {state?.error && <p className={style.error}>{state.error}</p>}

      {category && <input type="hidden" name="id" value={category.id} />}

      <div className={style.field}>
        <label htmlFor="name">Category Name</label>
        <input id="name" name="name" type="text" defaultValue={category?.name || ""} required />
      </div>

      <div className={style.formActions}>
        <button className={style.btn} type="submit" disabled={pending}>
          {pending ? "Saving..." : "Save Category"}
        </button>
        <Link href="/admin/gallery" className={`${style.btn} ${style.btnSecondary}`}>
          Cancel
        </Link>
      </div>
    </form>
  );
}
