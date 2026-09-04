"use client";

import { useActionState } from "react";
import Link from "next/link";
import style from "../../admin.module.css";

export default function OfferForm({ action, offer }) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className={style.form}>
      {state?.error && <p className={style.error}>{state.error}</p>}

      <div className={style.field}>
        <label htmlFor="link">Link</label>
        <input
          id="link"
          name="link"
          type="text"
          placeholder="/about or https://example.com"
          defaultValue={offer?.link || ""}
          required
        />
      </div>

      <div className={style.field}>
        <label htmlFor="image">Offer Image</label>
        {offer?.image && (
          <div className={style.currentImage}>
            <img src={offer.image} alt="Current offer" />
            <span className={style.hint}>Current image</span>
          </div>
        )}
        <input id="image" name="image" type="file" accept="image/png,image/jpeg,image/webp,image/gif" />
        <span className={style.hint}>Recommended size: 310 × 388 px{offer ? " (leave empty to keep current image)" : ""}</span>
      </div>

      <div className={style.formActions}>
        <button className={style.btn} type="submit" disabled={pending}>
          {pending ? "Saving..." : "Save Offer"}
        </button>
        <Link href="/admin/offers" className={`${style.btn} ${style.btnSecondary}`}>
          Cancel
        </Link>
      </div>
    </form>
  );
}
