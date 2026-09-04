"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { readUploadedImage, persistImageBuffer, deleteUploadedImage } from "@/lib/upload";
import { validateImageDimensions, IMAGE_REQUIREMENTS } from "@/lib/imageValidation";

export async function createStoryContent(prevState, formData) {
  const name = formData.get("name")?.toString().trim();
  const testimonial = formData.get("testimonial")?.toString().trim();
  const link = formData.get("link")?.toString().trim();

  if (!name) return { error: "Name is required." };
  if (!testimonial) return { error: "Testimonial text is required." };
  if (!link) return { error: "Link is required." };

  try {
    await prisma.visitorStoryContent.create({ data: { name, testimonial, link } });
  } catch {
    return { error: "Could not save the content. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/admin/stories");

  return { success: true };
}

export async function updateStoryContent(prevState, formData) {
  const id = formData.get("id")?.toString().trim();
  const name = formData.get("name")?.toString().trim();
  const testimonial = formData.get("testimonial")?.toString().trim();
  const link = formData.get("link")?.toString().trim();

  if (!name) return { error: "Name is required." };
  if (!testimonial) return { error: "Testimonial text is required." };
  if (!link) return { error: "Link is required." };

  try {
    await prisma.visitorStoryContent.update({ where: { id }, data: { name, testimonial, link } });
  } catch {
    return { error: "Could not update the content. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/admin/stories");
  revalidatePath(`/admin/stories/${id}/edit`);

  return { success: true };
}

export async function deleteStoryContent(id) {
  await prisma.visitorStoryContent.delete({ where: { id } }).catch(() => {});

  revalidatePath("/");
  revalidatePath("/admin/stories");
}

export async function bulkCreateStoryImages(prevState, formData) {
  const imageType = formData.get("imageType")?.toString().toUpperCase();

  if (imageType !== "SQUARE" && imageType !== "LANDSCAPE") {
    return { error: "Please choose an image type." };
  }

  const files = formData.getAll("images").filter((file) => file && file.size > 0);

  if (files.length === 0) {
    return { error: "Please choose at least one image." };
  }

  const requirement = IMAGE_REQUIREMENTS[imageType];
  const results = [];

  for (const file of files) {
    let buffer, extension;

    try {
      ({ buffer, extension } = await readUploadedImage(file));
    } catch (err) {
      results.push({ name: file.name, success: false, error: err.message });
      continue;
    }

    const check = validateImageDimensions(buffer, requirement);
    if (!check.valid) {
      results.push({ name: file.name, success: false, error: check.error });
      continue;
    }

    const publicPath = await persistImageBuffer(buffer, extension);

    try {
      const created = await prisma.visitorStoryImage.create({
        data: { image: publicPath, imageType },
      });
      results.push({ name: file.name, success: true, id: created.id, image: publicPath, imageType });
    } catch {
      await deleteUploadedImage(publicPath);
      results.push({ name: file.name, success: false, error: "Could not save this image." });
    }
  }

  revalidatePath("/");
  revalidatePath("/admin/stories");

  return { results, createdCount: results.filter((result) => result.success).length };
}

export async function deleteStoryImage(imageId) {
  const existing = await prisma.visitorStoryImage.findUnique({ where: { id: imageId } });
  if (!existing) return;

  await prisma.visitorStoryImage.delete({ where: { id: imageId } });
  await deleteUploadedImage(existing.image);

  revalidatePath("/");
  revalidatePath("/admin/stories");
}
