"use client";

import Link from "next/link";
import { useState } from "react";
import DeleteButton from "../../DeleteButton";
import { deleteGalleryImage, deleteGalleryCategory } from "./actions";
import style from "../../admin.module.css";

export default function GalleryListTabs({ images, categories }) {
  const [activeTab, setActiveTab] = useState("images");

  return (
    <div className={style.card}>
      <div className={style.tabs}>
        <button
          type="button"
          className={`${style.tabBtn} ${activeTab === "images" ? style.tabBtnActive : ""}`}
          onClick={() => setActiveTab("images")}
        >
          Images
        </button>
        <button
          type="button"
          className={`${style.tabBtn} ${activeTab === "categories" ? style.tabBtnActive : ""}`}
          onClick={() => setActiveTab("categories")}
        >
          Categories
        </button>
      </div>

      <div className={style.tabPanel} hidden={activeTab !== "images"}>
        <div className={style.tabActions}>
          <Link href="/admin/gallery/new" className={style.btn}>
            Add Image
          </Link>
          <Link href="/admin/gallery/bulk" className={`${style.btn} ${style.btnSecondary}`}>
            Bulk Upload
          </Link>
        </div>

        {images.length === 0 ? (
          <p className={style.empty}>No images yet. Click "Add Image" to upload one.</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Categories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {images.map((image) => (
                <tr key={image.id}>
                  <td>
                    <img className={style.thumb} src={image.image} alt="" />
                  </td>
                  <td>{image.categories.map((c) => c.galleryCategory.name).join(", ") || "—"}</td>
                  <td>
                    <div className={style.rowActions}>
                      <Link href={`/admin/gallery/${image.id}/edit`} className={`${style.btn} ${style.btnSecondary} ${style.smallBtn}`}>
                        Edit
                      </Link>
                      <DeleteButton action={deleteGalleryImage.bind(null, image.id)} confirmText="Delete this image?">
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

      <div className={style.tabPanel} hidden={activeTab !== "categories"}>
        <div className={style.tabActions}>
          <Link href="/admin/gallery/categories/new" className={style.btn}>
            Add Category
          </Link>
        </div>

        {categories.length === 0 ? (
          <p className={style.empty}>No categories yet. Click "Add Category" to create one.</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Images</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>{category._count.images}</td>
                  <td>
                    <div className={style.rowActions}>
                      <Link href={`/admin/gallery/categories/${category.id}/edit`} className={`${style.btn} ${style.btnSecondary} ${style.smallBtn}`}>
                        Edit
                      </Link>
                      <DeleteButton
                        action={deleteGalleryCategory.bind(null, category.id)}
                        confirmText={
                          category._count.images > 0
                            ? `This category is used by ${category._count.images} image(s). Deleting it will remove the category from those images but keep the images. Continue?`
                            : "Delete this category?"
                        }
                      >
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
    </div>
  );
}
