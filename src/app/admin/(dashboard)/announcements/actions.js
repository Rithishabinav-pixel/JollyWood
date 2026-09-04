"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

function readFields(formData) {
  const text = formData.get("text")?.toString().trim();
  const link = formData.get("link")?.toString().trim() || "#";
  const isActive = formData.get("isActive") === "on";
  const orderRaw = formData.get("order");
  const order = orderRaw ? parseInt(orderRaw, 10) : 0;
  return { text, link, isActive, order: Number.isNaN(order) ? 0 : order };
}

export async function createAnnouncement(prevState, formData) {
  const { text, link, isActive, order } = readFields(formData);

  if (!text) {
    return { error: "Announcement text is required." };
  }

  try {
    await prisma.announcement.create({ data: { text, link, isActive, order } });
  } catch {
    return { error: "Could not save the announcement. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/admin/announcements");
  redirect("/admin/announcements");
}

export async function updateAnnouncement(id, prevState, formData) {
  const { text, link, isActive, order } = readFields(formData);

  if (!text) {
    return { error: "Announcement text is required." };
  }

  try {
    await prisma.announcement.update({ where: { id }, data: { text, link, isActive, order } });
  } catch {
    return { error: "Could not update the announcement. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/admin/announcements");
  redirect("/admin/announcements");
}

export async function deleteAnnouncement(id) {
  await prisma.announcement.delete({ where: { id } }).catch(() => {});

  revalidatePath("/");
  revalidatePath("/admin/announcements");
}

export async function toggleAnnouncement(id, isActive) {
  await prisma.announcement.update({ where: { id }, data: { isActive } }).catch(() => {});

  revalidatePath("/");
  revalidatePath("/admin/announcements");
}
