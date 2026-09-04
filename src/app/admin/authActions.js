"use server";

import { redirect } from "next/navigation";
import { createAdminSession, destroyAdminSession } from "@/lib/session";

export async function loginAdmin(prevState, formData) {
  const password = formData.get("password");

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return { error: "Incorrect password." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await destroyAdminSession();
  redirect("/admin/login");
}
