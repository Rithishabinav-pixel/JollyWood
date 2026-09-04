"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardIcon, OffersIcon, StoriesIcon, AnnouncementsIcon } from "./AdminIcons";
import style from "./adminDashboard.module.css";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: DashboardIcon, exact: true },
  { href: "/admin/offers", label: "Offers", icon: OffersIcon },
  { href: "/admin/stories", label: "Visitor Stories", icon: StoriesIcon },
  { href: "/admin/announcements", label: "Announcements", icon: AnnouncementsIcon },
];

function isActive(pathname, href, exact) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AdminSidebar({ open, onNavigate }) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${style.backdrop} ${open ? style.backdropVisible : ""}`}
        onClick={onNavigate}
        aria-hidden="true"
      />
      <aside className={`${style.sidebar} ${open ? style.sidebarOpen : ""}`}>
        <div className={style.brand}>
          <span className={style.brandTop}>Admin</span>
          <span className={style.brandBottom}>Dashboard</span>
        </div>

        <nav className={style.nav}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href, item.exact);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`${style.navItem} ${active ? style.navItemActive : ""}`}
              >
                <Icon className={style.navIcon} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
