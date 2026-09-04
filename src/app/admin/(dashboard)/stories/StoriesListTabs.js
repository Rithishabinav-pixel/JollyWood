"use client";

import Link from "next/link";
import { useState } from "react";
import DeleteButton from "../../DeleteButton";
import { deleteStoryContent, deleteStoryImage } from "./actions";
import style from "../../admin.module.css";

export default function StoriesListTabs({ contents, images }) {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className={style.card}>
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
        {contents.length === 0 ? (
          <p className={style.empty}>No content yet. Click "Add Story" to create one.</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Testimonial Text</th>
                <th>Link</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contents.map((content) => (
                <tr key={content.id}>
                  <td>{content.name}</td>
                  <td>
                    {content.testimonial.slice(0, 60)}
                    {content.testimonial.length > 60 ? "…" : ""}
                  </td>
                  <td>{content.link}</td>
                  <td>
                    <div className={style.rowActions}>
                      <Link href={`/admin/stories/${content.id}/edit`} className={`${style.btn} ${style.btnSecondary} ${style.smallBtn}`}>
                        Edit
                      </Link>
                      <DeleteButton action={deleteStoryContent.bind(null, content.id)} confirmText="Delete this content?">
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

      <div className={style.tabPanel} hidden={activeTab !== "image"}>
        {images.length === 0 ? (
          <p className={style.empty}>No images yet. Click "Add Story" to upload one.</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {images.map((image) => (
                <tr key={image.id}>
                  <td>
                    <img className={style.thumb} src={image.image} alt="" />
                  </td>
                  <td>{image.imageType === "SQUARE" ? "Square" : "Landscape"}</td>
                  <td>
                    <DeleteButton action={deleteStoryImage.bind(null, image.id)} confirmText="Delete this image?">
                      Delete
                    </DeleteButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
