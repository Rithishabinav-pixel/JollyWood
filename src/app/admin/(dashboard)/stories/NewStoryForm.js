"use client";

import { useActionState, useState } from "react";
import { createStoryContent, bulkCreateStoryImages, deleteStoryImage } from "./actions";
import style from "../../admin.module.css";

const DIMENSION_HINTS = {
  SQUARE: "262 × 262 px",
  LANDSCAPE: "413 × 235 px",
};

export default function NewStoryForm() {
  const [activeTab, setActiveTab] = useState("content");
  const [imageType, setImageType] = useState("SQUARE");
  const [previews, setPreviews] = useState([]);

  const [contentState, contentAction, contentPending] = useActionState(createStoryContent, undefined);

  const [imageState, imageAction, imagePending] = useActionState(bulkCreateStoryImages, undefined);
  const [handledImageState, setHandledImageState] = useState(imageState);

  if (imageState !== handledImageState) {
    setHandledImageState(imageState);
    const created = imageState?.results?.filter((result) => result.success) || [];
    if (created.length > 0) {
      setPreviews((prev) => [...prev, ...created]);
    }
  }

  function removePreview(id) {
    setPreviews((prev) => prev.filter((preview) => preview.id !== id));
  }

  const failures = imageState?.results?.filter((result) => !result.success) || [];

  return (
    <>
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
        <form action={contentAction} className={style.form}>
          {contentState?.error && <p className={style.error}>{contentState.error}</p>}
          {contentState?.success && <p className={style.hint}>Story content saved.</p>}

          <div className={style.field}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
          </div>

          <div className={style.field}>
            <label htmlFor="testimonial">Testimonial Text</label>
            <textarea id="testimonial" name="testimonial" />
          </div>

          <div className={style.field}>
            <label htmlFor="link">Link</label>
            <input id="link" name="link" type="text" placeholder="/about or https://example.com" />
          </div>

          <div className={style.formActions}>
            <button className={style.btn} type="submit" disabled={contentPending}>
              {contentPending ? "Saving..." : "Add / Save"}
            </button>
          </div>
        </form>
      </div>

      <div className={style.tabPanel} hidden={activeTab !== "image"}>
        <form action={imageAction} className={style.form}>
          {imageState?.error && <p className={style.error}>{imageState.error}</p>}

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
            <label htmlFor="images">Bulk Image Upload</label>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              multiple
            />
            <span className={style.hint}>Recommended size: {DIMENSION_HINTS[imageType]}</span>
          </div>

          <div className={style.formActions}>
            <button className={style.btn} type="submit" disabled={imagePending}>
              {imagePending ? "Uploading..." : "Upload Images"}
            </button>
          </div>

          {failures.length > 0 && (
            <ul className={style.hint}>
              {failures.map((failure, index) => (
                <li key={index}>
                  {failure.name}: {failure.error}
                </li>
              ))}
            </ul>
          )}
        </form>

        {previews.length > 0 && (
          <div className={style.field}>
            <label>Uploaded Images</label>
            <div className={style.previewGrid}>
              {previews.map((preview) => (
                <div key={preview.id} className={style.previewItem}>
                  <form action={deleteStoryImage.bind(null, preview.id)} onSubmit={() => removePreview(preview.id)}>
                    <button type="submit" className={style.previewRemove} aria-label="Remove image">
                      ×
                    </button>
                  </form>
                  <img className={style.previewImg} src={preview.image} alt="" />
                  <p className={style.previewCaption}>{preview.imageType === "SQUARE" ? "Square" : "Landscape"}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
