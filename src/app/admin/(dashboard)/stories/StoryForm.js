"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import style from "../../admin.module.css";

const DIMENSION_HINTS = {
  SQUARE: "262 × 262 px",
  LANDSCAPE: "413 × 235 px",
};

export default function StoryForm({ action, story }) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [imageType, setImageType] = useState(story?.imageType || "SQUARE");
  const [activeTab, setActiveTab] = useState("content");

  return (
    <form action={formAction} className={style.form}>
      {state?.error && <p className={style.error}>{state.error}</p>}

      <div className={style.tabs}>
        <button
          type="button"
          className={`${style.tabBtn} ${activeTab === "content" ? style.tabBtnActive : ""}`}
          onClick={() => setActiveTab("content")}
        >
          Content
        </button>
        <button
          type="button"
          className={`${style.tabBtn} ${activeTab === "image" ? style.tabBtnActive : ""}`}
          onClick={() => setActiveTab("image")}
        >
          Image
        </button>
      </div>

      <div className={style.tabPanel} hidden={activeTab !== "content"}>
        <div className={style.field}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" defaultValue={story?.name || ""} required />
        </div>

        <div className={style.field}>
          <label htmlFor="testimonial">Testimonial Text</label>
          <textarea id="testimonial" name="testimonial" defaultValue={story?.testimonial || ""} required />
        </div>

        <div className={style.field}>
          <label htmlFor="link">Link</label>
          <input
            id="link"
            name="link"
            type="text"
            placeholder="/about or https://example.com"
            defaultValue={story?.link || ""}
            required
          />
        </div>
      </div>

      <div className={style.tabPanel} hidden={activeTab !== "image"}>
        <div className={style.field}>
          <label>Image Type</label>
          <div className={style.radioGroup}>
            <label>
              <input
                type="radio"
                name="imageType"
                value="SQUARE"
                checked={imageType === "SQUARE"}
                onChange={() => setImageType("SQUARE")}
              />
              Square
            </label>
            <label>
              <input
                type="radio"
                name="imageType"
                value="LANDSCAPE"
                checked={imageType === "LANDSCAPE"}
                onChange={() => setImageType("LANDSCAPE")}
              />
              Landscape
            </label>
          </div>
        </div>

        <div className={style.field}>
          <label htmlFor="image">Image</label>
          {story?.image && (
            <div className={style.currentImage}>
              <img src={story.image} alt="Current story" />
              <span className={style.hint}>Current image</span>
            </div>
          )}
          <input id="image" name="image" type="file" accept="image/png,image/jpeg,image/webp,image/gif" />
          <span className={style.hint}>
            Recommended size: {DIMENSION_HINTS[imageType]}
            {story ? " (leave empty to keep current image)" : ""}
          </span>
        </div>
      </div>

      <div className={style.formActions}>
        <button className={style.btn} type="submit" disabled={pending}>
          {pending ? "Saving..." : "Save Story"}
        </button>
        <Link href="/admin/stories" className={`${style.btn} ${style.btnSecondary}`}>
          Cancel
        </Link>
      </div>
    </form>
  );
}
