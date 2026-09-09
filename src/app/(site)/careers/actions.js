"use server";

import { prisma } from "@/lib/prisma";
import { readUploadedDocument, persistImageBuffer, deleteUploadedImage } from "@/lib/upload";
import { sendAdminNotification, sendUserConfirmation } from "@/lib/mailer";
import { careerAdminEmailHtml, careerUserEmailHtml } from "@/lib/emailTemplates";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function resolveResume(formData) {
  const file = formData.get("resume");

  if (!file || file.size === 0) {
    return { publicPath: null };
  }

  let buffer, extension;
  try {
    ({ buffer, extension } = await readUploadedDocument(file));
  } catch (err) {
    return { error: err.message };
  }

  const publicPath = await persistImageBuffer(buffer, extension, "resumes");
  return { publicPath };
}

export async function submitCareerEnquiry(prevState, formData) {
  const firstName = formData.get("firstName")?.toString().trim();
  const lastName = formData.get("lastName")?.toString().trim();
  const mobileNumber = formData.get("mobileNumber")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const currentDesignation = formData.get("currentDesignation")?.toString().trim() || null;
  const relevantExperience = formData.get("relevantExperience")?.toString().trim() || null;
  const coverLetter = formData.get("coverLetter")?.toString().trim() || null;

  if (!firstName) return { error: "First name is required." };
  if (!lastName) return { error: "Last name is required." };
  if (!mobileNumber) return { error: "Mobile number is required." };
  if (!email || !isValidEmail(email)) return { error: "A valid email address is required." };

  const resume = await resolveResume(formData);
  if (resume.error) {
    return { error: resume.error };
  }

  let enquiry;
  try {
    enquiry = await prisma.careerEnquiry.create({
      data: {
        firstName,
        lastName,
        mobileNumber,
        email,
        currentDesignation,
        relevantExperience,
        coverLetter,
        resume: resume.publicPath,
      },
    });
  } catch (err) {
    console.error("Failed to save career enquiry:", err);
    if (resume.publicPath) await deleteUploadedImage(resume.publicPath);
    return { error: "Could not submit your application. Please try again." };
  }

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
  const data = {
    firstName,
    lastName,
    mobileNumber,
    email,
    currentDesignation,
    relevantExperience,
    coverLetter,
    resumeUrl: resume.publicPath ? `${siteUrl}${resume.publicPath}` : null,
    createdAt: enquiry.createdAt,
  };

  await sendAdminNotification({
    subject: "New Career Enquiry",
    html: careerAdminEmailHtml(data),
  });

  await sendUserConfirmation({
    to: email,
    subject: "Thank You for Your Application",
    html: careerUserEmailHtml(data),
  });

  return { success: true };
}
