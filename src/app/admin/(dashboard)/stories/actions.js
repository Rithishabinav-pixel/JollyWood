"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { readUploadedImage, persistImageBuffer, deleteUploadedImage } from "@/lib/upload";
import { validateImageDimensions, IMAGE_REQUIREMENTS } from "@/lib/imageValidation";

function readFields(formData) {
  const imageType = formData.get("imageType")?.toString().toUpperCase();
  const name = formData.get("name")?.toString().trim();
  const testimonial = formData.get("testimonial")?.toString().trim();
  const link = formData.get("link")?.toString().trim();
  return { imageType, name, testimonial, link };
}

function validateFields({ imageType, name, testimonial, link }) {
  if (imageType !== "SQUARE" && imageType !== "LANDSCAPE") {
    return "Please choose an image type.";
  }
  if (!name) return "Name is required.";
  if (!testimonial) return "Testimonial text is required.";
  if (!link) return "Link is required.";
  return null;
}

async function resolveImage(formData, imageType) {
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

  const requirement = IMAGE_REQUIREMENTS[imageType];
  const check = validateImageDimensions(buffer, requirement);
  if (!check.valid) {
    return { error: check.error };
  }

  const publicPath = await persistImageBuffer(buffer, extension);
  return { publicPath };
}

export async function createStory(prevState, formData) {
  const fields = readFields(formData);
  const fieldError = validateFields(fields);
  if (fieldError) return { error: fieldError };

  const image = await resolveImage(formData, fields.imageType);
  if (image.error) return { error: image.error };
  if (!image.publicPath) return { error: "Story image is required." };

  try {
    await prisma.visitorStory.create({
      data: {
        imageType: fields.imageType,
        name: fields.name,
        testimonial: fields.testimonial,
        link: fields.link,
        image: image.publicPath,
      },
    });
  } catch {
    await deleteUploadedImage(image.publicPath);
    return { error: "Could not save the story. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/admin/stories");
  redirect("/admin/stories");
}

export async function updateStory(id, prevState, formData) {
  const fields = readFields(formData);
  const fieldError = validateFields(fields);
  if (fieldError) return { error: fieldError };

  const existing = await prisma.visitorStory.findUnique({ where: { id } });
  if (!existing) return { error: "Story not found." };

  const image = await resolveImage(formData, fields.imageType);
  if (image.error) return { error: image.error };

  try {
    await prisma.visitorStory.update({
      where: { id },
      data: {
        imageType: fields.imageType,
        name: fields.name,
        testimonial: fields.testimonial,
        link: fields.link,
        ...(image.publicPath ? { image: image.publicPath } : {}),
      },
    });
  } catch {
    return { error: "Could not update the story. Please try again." };
  }

  if (image.publicPath) {
    await deleteUploadedImage(existing.image);
  }

  revalidatePath("/");
  revalidatePath("/admin/stories");
  redirect("/admin/stories");
}

export async function deleteStory(id) {
  const existing = await prisma.visitorStory.findUnique({ where: { id } });
  if (!existing) return;

  await prisma.visitorStory.delete({ where: { id } });
  await deleteUploadedImage(existing.image);

  revalidatePath("/");
  revalidatePath("/admin/stories");
}
