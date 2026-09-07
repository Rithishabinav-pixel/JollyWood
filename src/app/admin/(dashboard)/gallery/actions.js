"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { readUploadedImage, persistImageBuffer, deleteUploadedImage } from "@/lib/upload";

const GALLERY_SUBDIR = "gallery";
const MAX_IMAGE_SIZE = 8 * 1024 * 1024;

async function saveGalleryFile(file) {
  if (file.size > MAX_IMAGE_SIZE) {
    return { error: "Image is too large. Maximum size is 8MB." };
  }

  let buffer, extension;
  try {
    ({ buffer, extension } = await readUploadedImage(file));
  } catch (err) {
    return { error: err.message };
  }

  const publicPath = await persistImageBuffer(buffer, extension, GALLERY_SUBDIR);
  return { publicPath };
}

export async function createGalleryCategory(prevState, formData) {
  const name = formData.get("name")?.toString().trim();
  if (!name) return { error: "Category name is required." };

  try {
    await prisma.galleryCategory.create({ data: { name } });
  } catch (err) {
    if (err?.code === "P2002") return { error: "A category with this name already exists." };
    return { error: "Could not save the category. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery");
}

export async function updateGalleryCategory(prevState, formData) {
  const id = formData.get("id")?.toString().trim();
  const name = formData.get("name")?.toString().trim();
  if (!name) return { error: "Category name is required." };

  try {
    await prisma.galleryCategory.update({ where: { id }, data: { name } });
  } catch (err) {
    if (err?.code === "P2002") return { error: "A category with this name already exists." };
    return { error: "Could not update the category. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery");
}

export async function deleteGalleryCategory(id) {
  await prisma.galleryCategory.delete({ where: { id } }).catch(() => {});

  revalidatePath("/");
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
}

export async function createGalleryImage(prevState, formData) {
  const file = formData.get("image");
  const categoryIds = formData.getAll("categoryIds").map((value) => value.toString());

  if (!file || file.size === 0) return { error: "An image is required." };
  if (categoryIds.length === 0) return { error: "Select at least one category." };

  const saved = await saveGalleryFile(file);
  if (saved.error) return { error: saved.error };

  try {
    await prisma.galleryImage.create({
      data: {
        image: saved.publicPath,
        categories: { create: categoryIds.map((galleryCategoryId) => ({ galleryCategoryId })) },
      },
    });
  } catch {
    await deleteUploadedImage(saved.publicPath);
    return { error: "Could not save the image. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery");
}

export async function updateGalleryImage(prevState, formData) {
  const id = formData.get("id")?.toString().trim();
  const file = formData.get("image");
  const categoryIds = formData.getAll("categoryIds").map((value) => value.toString());

  if (categoryIds.length === 0) return { error: "Select at least one category." };

  const existing = await prisma.galleryImage.findUnique({ where: { id } });
  if (!existing) return { error: "Image not found." };

  let newPublicPath = null;
  if (file && file.size > 0) {
    const saved = await saveGalleryFile(file);
    if (saved.error) return { error: saved.error };
    newPublicPath = saved.publicPath;
  }

  try {
    await prisma.$transaction([
      prisma.galleryImageCategory.deleteMany({ where: { galleryImageId: id } }),
      prisma.galleryImage.update({
        where: { id },
        data: {
          ...(newPublicPath ? { image: newPublicPath } : {}),
          categories: { create: categoryIds.map((galleryCategoryId) => ({ galleryCategoryId })) },
        },
      }),
    ]);
  } catch {
    if (newPublicPath) await deleteUploadedImage(newPublicPath);
    return { error: "Could not update the image. Please try again." };
  }

  if (newPublicPath) {
    await deleteUploadedImage(existing.image);
  }

  revalidatePath("/");
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery");
}

export async function deleteGalleryImage(id) {
  const existing = await prisma.galleryImage.findUnique({ where: { id } });
  if (!existing) return;

  await prisma.galleryImage.delete({ where: { id } });
  await deleteUploadedImage(existing.image);

  revalidatePath("/");
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
}

export async function bulkCreateGalleryImages(formData) {
  const count = parseInt(formData.get("count")?.toString() || "0", 10) || 0;
  const results = [];

  for (let i = 0; i < count; i++) {
    const file = formData.get(`file_${i}`);
    const categoryIds = formData.getAll(`categoryIds_${i}`).map((value) => value.toString());

    if (!file || file.size === 0) continue;

    if (categoryIds.length === 0) {
      results.push({ name: file.name, success: false, error: "Select at least one category." });
      continue;
    }

    const saved = await saveGalleryFile(file);
    if (saved.error) {
      results.push({ name: file.name, success: false, error: saved.error });
      continue;
    }

    try {
      const created = await prisma.galleryImage.create({
        data: {
          image: saved.publicPath,
          categories: { create: categoryIds.map((galleryCategoryId) => ({ galleryCategoryId })) },
        },
      });
      results.push({ name: file.name, success: true, id: created.id, image: saved.publicPath });
    } catch {
      await deleteUploadedImage(saved.publicPath);
      results.push({ name: file.name, success: false, error: "Could not save this image." });
    }
  }

  revalidatePath("/");
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");

  return { results, createdCount: results.filter((result) => result.success).length };
}
