"use client";

import { useActionState, useState } from "react";
import { bulkCreateStories } from "./actions";
import style from "../../admin.module.css";

const DIMENSION_HINTS = {
  SQUARE: "262 × 262 px",
  LANDSCAPE: "413 × 235 px",
};

export default function BulkUploadForm() {
  const [state, formAction, pending] = useActionState(bulkCreateStories, undefined);
  const [imageType, setImageType] = useState("SQUARE");

  return (
    <form action={formAction} className={style.form}>
      {state?.error && <p className={style.error}>{state.error}</p>}

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
        <label htmlFor="bulkImages">Images</label>
        <input
          id="bulkImages"
          name="images"
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          multiple
        />
        <span className={style.hint}>
          Recommended size: {DIMENSION_HINTS[imageType]}. Each new story is created with placeholder
          content — edit it afterward to add the name, testimonial and link.
        </span>
      </div>

      <div className={style.formActions}>
        <button className={style.btn} type="submit" disabled={pending}>
          {pending ? "Uploading..." : "Upload Images"}
        </button>
      </div>

      {state?.results && (
        <ul className={style.hint}>
          {state.results.map((result, index) => (
            <li key={index}>
              {result.name}: {result.success ? "Created" : result.error}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
