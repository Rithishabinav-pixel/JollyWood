"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { deleteUploadedImage } from "@/lib/upload";

export async function deleteContactEnquiry(id) {
  await prisma.contactEnquiry.delete({ where: { id } }).catch(() => {});
  revalidatePath("/admin/enquiries");
}

export async function deleteCareerEnquiry(id) {
  const existing = await prisma.careerEnquiry.findUnique({ where: { id } });
  if (!existing) return;

  await prisma.careerEnquiry.delete({ where: { id } });
  if (existing.resume) await deleteUploadedImage(existing.resume);

  revalidatePath("/admin/enquiries");
}

export async function deleteCorporateEnquiry(id) {
  await prisma.corporateEnquiry.delete({ where: { id } }).catch(() => {});
  revalidatePath("/admin/enquiries");
}
