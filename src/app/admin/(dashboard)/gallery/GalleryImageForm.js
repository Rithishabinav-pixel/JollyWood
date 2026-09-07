"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createGalleryImage, updateGalleryImage } from "./actions";
import style from "../../admin.module.css";

export default function GalleryImageForm({ categories, image }) {
  const action = image ? updateGalleryImage : createGalleryImage;
  const [state, formAction, pending] = useActionState(action, undefined);
  const selectedIds = image ? image.categories.map((c) => c.galleryCategoryId) : [];

  return (
    <form action={formAction} className={style.form}>
      {state?.error && <p className={style.error}>{state.error}</p>}

      {image && <input type="hidden" name="id" value={image.id} />}

      <div className={style.field}>
        <label htmlFor="image">Image</label>
        {image && (
          <div className={style.currentImage}>
            <img src={image.image} alt="Current" />
            <span className={style.hint}>Current image</span>
          </div>
        )}
        <input id="image" name="image" type="file" accept="image/png,image/jpeg,image/webp,image/gif" />
        <span className={style.hint}>
          {image ? "Leave empty to keep the current image." : "Maximum file size 8MB."}
        </span>
      </div>

      <div className={style.field}>
        <label>Categories</label>
        {categories.length === 0 ? (
          <span className={style.hint}>No categories yet. Create one in the Categories tab first.</span>
        ) : (
          <div className={style.checkboxGroup}>
            {categories.map((category) => (
              <label key={category.id}>
                <input
                  type="checkbox"
                  name="categoryIds"
                  value={category.id}
                  defaultChecked={selectedIds.includes(category.id)}
                />
                {category.name}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={style.formActions}>
        <button className={style.btn} type="submit" disabled={pending}>
          {pending ? "Saving..." : "Save Gallery Image"}
        </button>
        <Link href="/admin/gallery" className={`${style.btn} ${style.btnSecondary}`}>
          Cancel
        </Link>
      </div>
    </form>
  );
}
