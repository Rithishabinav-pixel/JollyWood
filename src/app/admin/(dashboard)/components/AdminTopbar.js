"use client";

import { usePathname } from "next/navigation";
import { logoutAdmin } from "../../authActions";
import { MenuIcon, LogoutIcon } from "./AdminIcons";
import style from "./adminDashboard.module.css";

const TITLES = {
  "/admin": "Dashboard",
  "/admin/offers": "Offers",
  "/admin/stories": "Visitor Stories",
  "/admin/announcements": "Announcements",
};

function resolveTitle(pathname) {
  if (TITLES[pathname]) return TITLES[pathname];

  const match = Object.keys(TITLES)
    .filter((key) => key !== "/admin")
    .find((key) => pathname.startsWith(key));

  return match ? TITLES[match] : "Admin";
}

export default function AdminTopbar({ onMenuClick }) {
  const pathname = usePathname();

  return (
    <header className={style.topbar}>
      <div className={style.topbarLeft}>
        <button type="button" className={style.menuBtn} onClick={onMenuClick} aria-label="Toggle navigation">
          <MenuIcon />
        </button>
        <h1 className={style.pageTitle}>{resolveTitle(pathname)}</h1>
      </div>

      <form action={logoutAdmin}>
        <button type="submit" className={style.logoutBtn}>
          <LogoutIcon />
          <span>Log Out</span>
        </button>
      </form>
    </header>
  );
}
