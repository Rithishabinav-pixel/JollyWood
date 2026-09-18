"use client";

import { useState, useTransition } from "react";
import { bulkCreateGalleryImages } from "./actions";
import style from "../../admin.module.css";

export default function BulkUploadForm({ categories }) {
  const [staged, setStaged] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  function handleFilesSelected(event) {
    const selected = Array.from(event.target.files || []);
    const next = selected.map((file) => ({
      id: crypto.randomUUID(),
      file,
      previewUrl: URL.createObjectURL(file),
      categoryIds: new Set(),
    }));
    setStaged((prev) => [...prev, ...next]);
    event.target.value = "";
  }

  function toggleCategory(fileId, categoryId) {
    setStaged((prev) =>
      prev.map((entry) => {
        if (entry.id !== fileId) return entry;
        const next = new Set(entry.categoryIds);
        if (next.has(categoryId)) next.delete(categoryId);
        else next.add(categoryId);
        return { ...entry, categoryIds: next };
      })
    );
  }

  function removeStaged(fileId) {
    setStaged((prev) => prev.filter((entry) => entry.id !== fileId));
  }

  function handleUpload() {
    const formData = new FormData();
    formData.set("count", String(staged.length));
    staged.forEach((entry, index) => {
      formData.set(`file_${index}`, entry.file);
      [...entry.categoryIds].forEach((categoryId) => {
        formData.append(`categoryIds_${index}`, categoryId);
      });
    });

    setUploadError(null);

    startTransition(async () => {
      try {
        const response = await bulkCreateGalleryImages(formData);
        setResult(response);
        const failedIds = new Set(
          staged.filter((_, index) => response?.results?.[index] && !response.results[index].success).map((entry) => entry.id)
        );
        setStaged((prev) => prev.filter((entry) => failedIds.has(entry.id)));
      } catch {
        setUploadError("Upload failed. Please check your connection and try again.");
      }
    });
  }

  const failures = result?.results?.filter((entry) => !entry.success) || [];

  return (
    <div className={style.form}>
      {categories.length === 0 && (
        <p className={style.error}>Create at least one category first before uploading images.</p>
      )}

      <div className={style.field}>
        <label htmlFor="bulkImages">Select Multiple Images</label>
        <input
          id="bulkImages"
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          multiple
          onChange={handleFilesSelected}
          disabled={categories.length === 0}
        />
        <span className={style.hint}>No file size limit for bulk uploads.</span>
      </div>

      {staged.length > 0 && (
        <div className={style.bulkGrid}>
          {staged.map((entry) => (
            <div key={entry.id} className={style.bulkCard}>
              <button
                type="button"
                className={style.previewRemove}
                aria-label="Remove image"
                onClick={() => removeStaged(entry.id)}
              >
                ×
              </button>
              <img src={entry.previewUrl} alt="" />
              <span className={style.bulkCardName}>{entry.file.name}</span>
              <div className={style.checkboxGroup}>
                {categories.map((category) => (
                  <label key={category.id}>
                    <input
                      type="checkbox"
                      checked={entry.categoryIds.has(category.id)}
                      onChange={() => toggleCategory(entry.id, category.id)}
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {failures.length > 0 && (
        <ul className={style.hint}>
          {failures.map((failure, index) => (
            <li key={index}>
              {failure.name}: {failure.error}
            </li>
          ))}
        </ul>
      )}

      {result?.createdCount > 0 && <p className={style.hint}>{result.createdCount} image(s) uploaded successfully.</p>}

      {uploadError && <p className={style.error} role="alert">{uploadError}</p>}

      {isPending && (
        <div className={style.uploadingIndicator} role="status">
          <span className={style.spinner} aria-hidden="true"></span>
          Uploading, please wait. This may take a while for large files...
        </div>
      )}

      <div className={style.formActions}>
        <button
          type="button"
          className={style.btn}
          disabled={staged.length === 0 || isPending}
          onClick={handleUpload}
        >
          {isPending ? "Uploading..." : "Upload Images"}
        </button>
      </div>
    </div>
  );
}
