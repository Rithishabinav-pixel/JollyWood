"use client";

import style from "./admin.module.css";

export default function DeleteButton({ action, confirmText, children }) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!confirm(confirmText || "Are you sure you want to delete this item?")) {
          event.preventDefault();
        }
      }}
    >
      <button type="submit" className={`${style.btn} ${style.btnDanger} ${style.smallBtn}`}>
        {children || "Delete"}
      </button>
    </form>
  );
}
