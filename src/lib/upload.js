import { writeFile, unlink } from "fs/promises";
import path from "path";
import crypto from "crypto";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

const EXTENSION_BY_MIME = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
};

const DOCUMENT_EXTENSION_BY_MIME = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};

export async function readUploadedImage(file) {
  const extension = EXTENSION_BY_MIME[file.type];

  if (!extension) {
    throw new Error("Unsupported image format. Please upload a PNG, JPG, WEBP or GIF file.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  return { buffer, extension };
}

export async function readUploadedDocument(file) {
  const extension = DOCUMENT_EXTENSION_BY_MIME[file.type];

  if (!extension) {
    throw new Error("Unsupported resume format. Please upload a PDF, DOC or DOCX file.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  return { buffer, extension };
}

export async function persistImageBuffer(buffer, extension, subdir = "") {
  const filename = `${crypto.randomUUID()}.${extension}`;
  const dir = subdir ? path.join(UPLOAD_DIR, subdir) : UPLOAD_DIR;
  await writeFile(path.join(dir, filename), buffer);
  return subdir ? `/uploads/${subdir}/${filename}` : `/uploads/${filename}`;
}

export async function deleteUploadedImage(publicPath) {
  if (!publicPath || !publicPath.startsWith("/uploads/")) return;

  try {
    await unlink(path.join(process.cwd(), "public", publicPath));
  } catch {
    // file already missing, ignore
  }
}
