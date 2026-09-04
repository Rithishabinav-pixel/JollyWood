"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { readUploadedImage, persistImageBuffer, deleteUploadedImage } from "@/lib/upload";
import { validateImageDimensions, IMAGE_REQUIREMENTS } from "@/lib/imageValidation";

async function resolveImage(formData) {
  const file = formData.get("image");

  if (!file || file.size === 0) {
    return { publicPath: null };
  }

  let buffer, extension;
  try {
    ({ buffer, extension } = await readUploadedImage(file));
  } catch (err) {
    return { error: err.message };
  }

  const check = validateImageDimensions(buffer, IMAGE_REQUIREMENTS.OFFER);
  if (!check.valid) {
    return { error: check.error };
  }

  const publicPath = await persistImageBuffer(buffer, extension);
  return { publicPath };
}

export async function createOffer(prevState, formData) {
  const link = formData.get("link")?.toString().trim();

  if (!link) {
    return { error: "Link is required." };
  }

  const image = await resolveImage(formData);
  if (image.error) {
    return { error: image.error };
  }
  if (!image.publicPath) {
    return { error: "Offer image is required." };
  }

  try {
    await prisma.offer.create({
      data: { image: image.publicPath, link },
    });
  } catch {
    await deleteUploadedImage(image.publicPath);
    return { error: "Could not save the offer. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/admin/offers");
  redirect("/admin/offers");
}

export async function updateOffer(id, prevState, formData) {
  const link = formData.get("link")?.toString().trim();

  if (!link) {
    return { error: "Link is required." };
  }

  const existing = await prisma.offer.findUnique({ where: { id } });
  if (!existing) {
    return { error: "Offer not found." };
  }

  const image = await resolveImage(formData);
  if (image.error) {
    return { error: image.error };
  }

  try {
    await prisma.offer.update({
      where: { id },
      data: { link, ...(image.publicPath ? { image: image.publicPath } : {}) },
    });
  } catch {
    return { error: "Could not update the offer. Please try again." };
  }

  if (image.publicPath) {
    await deleteUploadedImage(existing.image);
  }

  revalidatePath("/");
  revalidatePath("/admin/offers");
  redirect("/admin/offers");
}

export async function deleteOffer(id) {
  const existing = await prisma.offer.findUnique({ where: { id } });
  if (!existing) return;

  await prisma.offer.delete({ where: { id } });
  await deleteUploadedImage(existing.image);

  revalidatePath("/");
  revalidatePath("/admin/offers");
}
