"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import style from "./adminDashboard.module.css";

export default function AdminShellClient({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={style.shell}>
      <AdminSidebar open={mobileOpen} onNavigate={() => setMobileOpen(false)} />
      <div className={style.main}>
        <AdminTopbar onMenuClick={() => setMobileOpen((prev) => !prev)} />
        <main className={style.content}>{children}</main>
      </div>
    </div>
  );
}
